# 🔗 Lead Tracker — Chrome Extension

A lightweight Chrome extension to save and manage your leads (URLs, notes, contacts) directly from the browser toolbar. Built with **TypeScript** and **Chrome Manifest V3**.

---

## ✨ Features

- **Save Input** — Type any URL or text into the input field and save it with one click
- **Save Tab** — Instantly save the URL of your currently active browser tab
- **Delete All** — Double-click the delete button to clear all saved leads at once
- **Persistent Storage** — Leads are stored in `localStorage` and persist across browser restarts
- **Clickable Links** — All saved leads render as clickable links that open in a new tab
- **Lightweight** — Zero external runtime dependencies, fast popup load

---

## 📸 How It Works

1. Click the **Lead Tracker** icon in your Chrome toolbar to open the popup.
2. **Save a custom lead** — Type a URL or text into the input field and click **SAVE INPUT**.
3. **Save the current tab** — Click **SAVE TAB** to capture the active tab's URL automatically.
4. **Delete all leads** — Double-click **DELETE ALL** to clear the entire list.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **TypeScript** | Type-safe application logic |
| **HTML / CSS** | Extension popup UI with Flexbox layout |
| **Chrome Manifest V3** | Extension configuration & permissions |
| **Chrome Tabs API** | Access to the active browser tab URL |
| **localStorage** | Client-side data persistence |
| **@types/chrome** | TypeScript type definitions for Chrome APIs |
| **pnpm** | Fast, disk-efficient package manager |

---

## 📁 Project Structure

```
Lead Tracker Extension/
├── src/
│   └── index.ts          # Main application logic (TypeScript source)
├── dist/
│   ├── index.js          # Compiled JavaScript output
│   └── index.js.map      # Source map for debugging
├── index.html            # Extension popup HTML
├── style.css             # Popup styles (Flexbox layout, dark violet theme)
├── icon.png              # Extension toolbar icon
├── manifest.json         # Chrome extension manifest (V3)
├── tsconfig.json         # TypeScript compiler configuration
├── package.json          # Project metadata & scripts
├── pnpm-lock.yaml        # Dependency lockfile
└── .gitignore            # Git ignore rules
```

---

## 🔐 Chrome Permissions

| Permission | Reason |
|---|---|
| `tabs` | Required to read the active tab's URL when using the **SAVE TAB** button |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (v11+)
- Google Chrome browser

### Installation

```bash
# Clone the repository
git clone https://github.com/hritik2004-cse/Lead_Tracker_Chrome_Extension.git
cd Lead_Tracker_Chrome_Extension

# Install dependencies
pnpm install
```

### Build & Development

```bash
# Compile TypeScript (one-time)
pnpm exec tsc

# Or start the compiler in watch mode for live development
pnpm run watch
```

This compiles `src/index.ts` → `dist/index.js` and recompiles automatically on every file change.

### Load in Chrome

1. Open `chrome://extensions/` in your browser.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked** and select the project root folder.
4. The **Lead Tracker** icon will appear in your toolbar — click it to start saving leads!

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **watch** | `pnpm run watch` | Runs `tsc --watch` for live TypeScript compilation |

---

## 🧩 Key Implementation Details

- **`chrome.tabs.query()`** — Queries the active tab in the current window to grab its URL for the Save Tab feature.
- **`localStorage`** — All leads are serialized as JSON and stored under the `myLeads` key. Data loads automatically on popup open.
- **Double-click to delete** — The delete button uses the `dblclick` event to prevent accidental data loss.
- **Input validation** — Empty inputs are ignored; only non-empty values are saved.
- **Strict TypeScript** — The project uses `strict: true` with `noUncheckedIndexedAccess` for maximum type safety.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an [issue](https://github.com/hritik2004-cse/Lead_Tracker_Chrome_Extension/issues) or submit a pull request.

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
