# 🔗 Lead Tracker — Chrome Extension

A simple Chrome extension to save and manage your leads (URLs, contacts, notes) right from your browser toolbar. Built with **TypeScript** and **Manifest V3**.

---

## ✨ Features

- **Save Leads** — Quickly save any text input (URLs, names, notes) with a single click
- **Persistent Storage** — Leads are stored in `localStorage`, so they survive browser restarts
- **Clickable Links** — Saved leads render as clickable links that open in a new tab
- **Delete All** — Double-click the delete button to clear all saved leads
- **Lightweight** — Minimal footprint, no external runtime dependencies

---

## 📸 How It Works

1. Click the extension icon in your Chrome toolbar to open the popup.
2. Type a URL or lead into the input field.
3. Click **SAVE INPUT** to add it to the list.
4. Double-click **DELETE ALL** to clear all leads.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **TypeScript** | Type-safe application logic |
| **HTML / CSS** | Extension popup UI |
| **Chrome Manifest V3** | Extension configuration |
| **localStorage** | Client-side data persistence |
| **pnpm** | Package manager |

---

## 📁 Project Structure

```
Lead Tracker Extension/
├── src/
│   └── index.ts          # Main application logic (TypeScript)
├── dist/
│   └── index.js          # Compiled JavaScript output
├── index.html            # Extension popup HTML
├── style.css             # Popup styles
├── icon.png              # Extension icon
├── manifest.json         # Chrome extension manifest (V3)
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project metadata & scripts
└── pnpm-lock.yaml        # Lockfile
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (v11+)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/lead-tracker-extension.git
cd lead-tracker-extension

# Install dependencies
pnpm install
```

### Development

```bash
# Start the TypeScript compiler in watch mode
pnpm run watch
```

This compiles `src/index.ts` → `dist/index.js` and recompiles on every file change.

### Load in Chrome

1. Open `chrome://extensions/` in your browser.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked** and select the project root folder.
4. The Lead Tracker icon will appear in your toolbar — click it to use!

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **watch** | `pnpm run watch` | Runs `tsc --watch` for live compilation |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
