# FirstLayer Stream Deck Plugin

Stream Deck integration for the [FirstLayer](https://firstlayer.app) desktop app. Control your overlays and session tools directly from your Stream Deck — no mouse, no alt-tab.

---

## Requirements

- **Stream Deck** software 6.4 or later
- **FirstLayer** desktop app 0.7.4 or later running (the plugin communicates with it locally)

---

## Actions

| Action | Description |
|---|---|
| **Toolbar** | Show or hide the FirstLayer toolbar |
| **Chat** | Show or hide the chat overlay |
| **Pulse** | Show or hide the Pulse overlay |
| **Activities** | Show or hide the Activities overlay |
| **Smart Grouping** | Show or hide the Smart Grouping pill strip |
| **Priority Feed** | Show or hide the Priority Feed overlay |
| **Closed Captions** | Show or hide the CC overlay |
| **Edit Mode** | Toggle overlay edit/move mode |
| **Click Through** | Toggle overlay interactivity (lit = overlays are interactive) |
| **FirstLayer öffnen** | Open or bring the FirstLayer app to the foreground |
| **Key Moment** | Mark the current moment in the session log |

Toggle actions stay in sync — if you change a state inside the app, the Stream Deck button updates automatically within 2 seconds.

---

## Installation

1. Download the latest `com.firstlayer.overlay.streamDeckPlugin` from [Releases](../../releases)
2. Double-click the file — Stream Deck will install it automatically
3. Start **FirstLayer** — the plugin connects to it on `localhost:57432`
4. Drag actions onto your Stream Deck buttons

---

## Development

### Prerequisites

- Node.js 20+
- Java 17+ (only needed if building the main FirstLayer app)

### Setup

```bash
npm install
```

### Build plugin bundle

```bash
npm run build
```

### Build + package as installable `.streamDeckPlugin`

```bash
npm run pack
```

The packaged file is created at `com.firstlayer.overlay.streamDeckPlugin`.

### Watch mode (rebuild on change)

```bash
npm run watch
```

---

## How it works

The FirstLayer desktop app exposes a local HTTP server on `http://127.0.0.1:57432`.

- `GET /status` — returns the current state of all overlays
- `POST /action` — sends a command (e.g. `{ "command": "toggle_chat" }`)

The plugin polls `/status` every 2 seconds to keep button states in sync with the app, regardless of how the overlays were toggled (Stream Deck, toolbar, keyboard shortcut).

---

## License

MIT
