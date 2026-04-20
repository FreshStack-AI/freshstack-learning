// ============================================================
// FRESHSTACK LEARNING PATH — CLIENT-SIDE APP
// ============================================================

const STORAGE_KEY = "freshstack_learning_progress_v2";

let progress = loadProgress();
let currentTrackFilter = "all";
let currentWeekFilter = "all";
let sprintOnly = false;

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn("Could not save progress:", e);
  }
}

// ============ SPRINT META ============
function renderSprintMeta() {
  const decisions = document.getElementById("sprint-decisions");
  const intents = document.getElementById("sprint-intents");
  if (decisions && SPRINT_META.decisions) {
    decisions.innerHTML = `<ul class="sprint-list">${SPRINT_META.decisions
      .map((d) => `<li>${escapeHtml(d)}</li>`)
      .join("")}</ul>`;
  }
  if (intents && SPRINT_META.v1Intents) {
    intents.innerHTML = `<ul class="sprint-list">${SPRINT_META.v1Intents
      .map((i) => `<li>${escapeHtml(i)}</li>`)
      .join("")}</ul>`;
  }
}

// ============ RENDER TRACK ============
function renderTrack(trackKey, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const track = LEARNING_PATH[trackKey];
  if (!track) return;

  container.innerHTML = "";

  track.phases.forEach((phase) => {
    const phaseEl = document.createElement("article");
    phaseEl.className = "phase";
    phaseEl.dataset.phaseWeek = phase.week;
    phaseEl.innerHTML = `
      <header class="phase-header">
        <div class="phase-meta">
          <span class="phase-label">${phase.label}</span>
          <span class="phase-time">${phase.time}</span>
        </div>
        <h3 class="phase-title">${escapeHtml(phase.title)}</h3>
        <p class="phase-objective"><strong>Objective:</strong> ${escapeHtml(phase.objective)}</p>
      </header>
      <div class="phase-modules">
        ${phase.modules.map((m) => renderModule(m)).join("")}
      </div>
    `;
    container.appendChild(phaseEl);
  });

  container.querySelectorAll(".module-checkbox").forEach((cb) => {
    cb.addEventListener("click", () => {
      const moduleId = cb.dataset.moduleId;
      progress[moduleId] = !progress[moduleId];
      saveProgress();
      updateModuleUI(moduleId);
      updateAllProgress();
    });
  });
}

function renderModule(module) {
  const isChecked = progress[module.id] || false;
  const resourcesHtml = (module.resources || [])
    .map(
      (r) => `
        <div class="module-resource">
          <span class="resource-type">${escapeHtml(r.type)}</span>
          <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener">${escapeHtml(r.label)}</a>
        </div>
      `
    )
    .join("");

  const exerciseHtml = module.exercise
    ? `<div class="module-exercise"><strong>// PRACTICE</strong>${escapeHtml(module.exercise)}</div>`
    : "";

  const weekBadge = module.week > 0 ? `<span class="module-week">W${module.week}</span>` : `<span class="module-week">POST</span>`;
  const hoursBadge = module.hours ? `<span class="module-hours">${module.hours}h</span>` : "";
  const sprintBadge = module.sprintEssential ? `<span class="module-sprint-tag">SPRINT</span>` : "";

  return `
    <div class="module ${isChecked ? "completed" : ""}"
         data-module-id="${module.id}"
         data-module-week="${module.week}"
         data-module-sprint="${module.sprintEssential ? "1" : "0"}">
      <div class="module-checkbox ${isChecked ? "checked" : ""}" data-module-id="${module.id}" role="checkbox" aria-checked="${isChecked}" tabindex="0"></div>
      <div class="module-body">
        <h4 class="module-title">
          ${weekBadge}${escapeHtml(module.title)}${sprintBadge}${hoursBadge}
        </h4>
        <p class="module-desc">${escapeHtml(module.desc)}</p>
        ${resourcesHtml ? `<div class="module-resources">${resourcesHtml}</div>` : ""}
        ${exerciseHtml}
      </div>
    </div>
  `;
}

function updateModuleUI(moduleId) {
  const moduleEl = document.querySelector(`.module[data-module-id="${moduleId}"]`);
  if (!moduleEl) return;
  const cb = moduleEl.querySelector(".module-checkbox");
  const isChecked = progress[moduleId] || false;
  moduleEl.classList.toggle("completed", isChecked);
  cb.classList.toggle("checked", isChecked);
  cb.setAttribute("aria-checked", isChecked);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}

// ============ PROGRESS ============
function getTrackStats(trackKey) {
  const track = LEARNING_PATH[trackKey];
  if (!track) return { total: 0, done: 0 };
  let total = 0;
  let done = 0;
  track.phases.forEach((phase) => {
    phase.modules.forEach((m) => {
      total += 1;
      if (progress[m.id]) done += 1;
    });
  });
  return { total, done };
}

function updateAllProgress() {
  const tracks = ["shared", "lara", "bap"];
  let grandTotal = 0;
  let grandDone = 0;

  tracks.forEach((trackKey) => {
    const { total, done } = getTrackStats(trackKey);
    grandTotal += total;
    grandDone += done;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const textEl = document.getElementById(`${trackKey}-progress-text`);
    const fillEl = document.getElementById(`${trackKey}-progress-fill`);
    if (textEl) textEl.textContent = `${done} of ${total} complete`;
    if (fillEl) fillEl.style.width = `${pct}%`;
  });

  const overallPct = grandTotal > 0 ? Math.round((grandDone / grandTotal) * 100) : 0;
  const overallBar = document.getElementById("overall-progress-bar");
  const overallValue = document.getElementById("overall-progress-value");
  if (overallBar) overallBar.style.width = `${overallPct}%`;
  if (overallValue) overallValue.textContent = `${overallPct}% · ${grandDone} of ${grandTotal} modules`;
}

// ============ FILTERING ============
function applyAllFilters() {
  // Track filter — hide entire sections
  document.querySelectorAll(".track-section").forEach((section) => {
    const track = section.dataset.track;
    if (currentTrackFilter === "all") {
      section.classList.remove("hidden");
    } else {
      section.classList.toggle("hidden", track !== currentTrackFilter);
    }
  });

  // Week + sprint filters — hide individual modules and empty phases
  document.querySelectorAll(".module").forEach((moduleEl) => {
    const moduleWeek = moduleEl.dataset.moduleWeek;
    const isSprint = moduleEl.dataset.moduleSprint === "1";

    const weekMatch =
      currentWeekFilter === "all" || String(moduleWeek) === String(currentWeekFilter);
    const sprintMatch = !sprintOnly || isSprint;

    moduleEl.style.display = weekMatch && sprintMatch ? "" : "none";
  });

  // Hide phases that have no visible modules
  document.querySelectorAll(".phase").forEach((phaseEl) => {
    const visibleModules = phaseEl.querySelectorAll(".module:not([style*='display: none'])");
    phaseEl.style.display = visibleModules.length > 0 ? "" : "none";
  });
}

function setTrackFilter(filter) {
  currentTrackFilter = filter;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  applyAllFilters();
}

function setWeekFilter(week) {
  currentWeekFilter = week;
  document.querySelectorAll(".week-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.week === week);
  });
  applyAllFilters();
}

function setSprintOnly(flag) {
  sprintOnly = flag;
  applyAllFilters();
}

// ============ EVENT LISTENERS ============
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => setTrackFilter(btn.dataset.filter));
  });
  document.querySelectorAll(".week-btn").forEach((btn) => {
    btn.addEventListener("click", () => setWeekFilter(btn.dataset.week));
  });
  const sprintToggle = document.getElementById("sprint-only-toggle");
  if (sprintToggle) {
    sprintToggle.addEventListener("change", (e) => setSprintOnly(e.target.checked));
  }
}

function initResetButton() {
  const resetBtn = document.getElementById("reset-progress");
  if (!resetBtn) return;
  resetBtn.addEventListener("click", () => {
    if (!confirm("Reset all progress on this browser? This cannot be undone.")) return;
    progress = {};
    saveProgress();
    renderTrack("shared", "shared-modules");
    renderTrack("lara", "lara-modules");
    renderTrack("bap", "bap-modules");
    updateAllProgress();
    applyAllFilters();
  });
}

// ============ INIT ============
document.addEventListener("DOMContentLoaded", () => {
  renderSprintMeta();
  renderTrack("shared", "shared-modules");
  renderTrack("lara", "lara-modules");
  renderTrack("bap", "bap-modules");
  updateAllProgress();
  initFilters();
  initResetButton();
});
