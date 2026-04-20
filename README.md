# FreshStack Platform Learning Path

Static site. CEO Bot platform learning path for Lara (builder) and Bap (commercial). Shared foundation + two role-specific tracks.

## What's in here

```
learning-path/
├── index.html       Page structure
├── styles.css       FreshStack brand system
├── app.js           Checkbox logic, filtering, progress
├── data.js          All learning content (phases, modules, resources)
├── netlify.toml     Deploy config
└── README.md        This file
```

All content lives in `data.js`. Edit it to update modules, phases, or resources — the site re-renders automatically.

## Deploying to Netlify

### Option A — drag and drop (fastest)

1. Zip the `learning-path` folder
2. Go to app.netlify.com → Deploys → drag the ZIP into the drop zone
3. Netlify assigns a URL. Rename the site in settings to something like `freshstack-learning`.
4. The URL becomes `freshstack-learning.netlify.app`.

### Option B — GitHub-linked (for ongoing updates)

1. Push this folder to a GitHub repo (public or private, doesn't matter)
2. In Netlify: Add new site → Import from Git → select the repo
3. Build settings: leave blank (it's a static site, `publish = "."`)
4. Deploy

Every git push to main auto-deploys.

### Option C — replace the existing Netlify site

If the existing `automationlearningpath.netlify.app` site has a GitHub repo behind it, you can replace the contents of that repo with this folder's contents and push. The site updates automatically.

If it was deployed by drag-and-drop, go to the site in Netlify → Deploys → drag the new ZIP in. It replaces the previous deploy.

## Updating the content

Everything in `data.js`. Format:

```js
LEARNING_PATH.lara.phases[0].modules.push({
  id: "l1-5",           // Unique ID — never reuse
  title: "New module",
  desc: "Short description shown under the title.",
  resources: [
    { type: "DOCS", label: "Some doc", url: "https://..." }
  ],
  exercise: "Practical thing to actually do."
});
```

Module IDs are used as localStorage keys for progress. Don't change existing IDs or you'll reset everyone's progress for that module.

## Progress tracking

Per-browser, localStorage only. Lara tracks on her machines, Bap tracks on his. No sync. If this becomes annoying, we add Supabase sync in v2.

## Brand tokens (if you edit styles)

```
--black:         #0A0A0A
--near-black:    #1C1C1E
--dark-grey:     #3A3A3C
--mid-grey:      #8E8E93
--warm-neutral:  #C8C0B0
--accent:        #F5F0E8

Display:  Space Grotesk Bold 700
Body:     Inter Regular 400
Mono:     DM Mono Regular 400  (use with // prefix labels)
```

## Local testing

From the folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

