# CHRONOS v76 :: Genesis Master

## Overview

CHRONOS v76 is a sophisticated command center interface designed for GitHub project management and visualization. This single HTML file contains multiple integrated engines:

- **Reactor Engine**: Network visualization using vis-network
- **Team Cockpit**: Server controls and mission configuration
- **Forensic Briefing Engine**: Real-time intelligence feed
- **Heatmap Engine**: Strategic analysis display
- **DVR Timeline**: Playback controls for temporal navigation

## Features

### 🛰️ Server Control
- SAS Gateway management
- Relay Hub control
- Auto-Pulse automation

### 🔹 Mission Configuration
- Target URL deployment
- Configurable crawl depth (1-5 levels)
- Hunter deployment system

### 🧩 Ingest Hangar
- Auto-detection of data capsules
- Real-time synchronization
- AURA format parsing with pako decompression

### 📋 Executive Briefing
- Forensic signal processing
- Ghost entity detection (new/deleted)
- Pulse update tracking
- Priority-based alerts

### 🔥 Strategic Heatmap
- Node type frequency analysis
- Adjustable heat intensity
- Visual density mapping

### 📜 Unified Log Stream
- Real-time system logs
- Multi-source aggregation
- Auto-scrolling feed (limited to 100 entries)

### 🎬 DVR Timeline
- Temporal navigation
- Playback controls (play/pause)
- Seek functionality
- Visual playhead indicator

### 🜂 War Report Export
- PDF generation with html2pdf.js
- Executive summary statistics
- Strategic heatmap visualization
- Forensic timeline export

## Usage

### Standalone Mode (Demo)
Simply open `index.html` in a web browser. The interface will automatically enter demo mode if no backend is detected, loading synthetic data for demonstration.

### With Backend Server
The interface expects the following backend endpoints:

- **SAS Gateway**: `http://localhost:3000`
  - `GET /list` - List available capsules
  - `GET /hangar/:filename` - Download capsule data
  - `POST /control/:service/:action` - Control services
  - `POST /submit` - Deploy hunters

- **Relay Hub**: `ws://localhost:4001` (WebSocket)

### Starting the Interface

#### Option 1: Direct File Access
```bash
# Open directly in browser
open index.html
# or
firefox index.html
```

#### Option 2: HTTP Server (Python)
```bash
python3 -m http.server 8080
# Visit http://localhost:8080/index.html
```

#### Option 3: HTTP Server (Node.js)
```bash
node -e "const http = require('http'); const fs = require('fs'); http.createServer((req, res) => { if (req.url === '/' || req.url === '/index.html') { res.writeHead(200, {'Content-Type': 'text/html'}); res.end(fs.readFileSync('index.html')); } else { res.writeHead(404); res.end('Not found'); } }).listen(9001, () => console.log('Server running on port 9001'));"
# Visit http://localhost:9001/
```

## Data Format

### AURA Capsule Format
The interface expects data in AURA format with the following structure:

```
RABBIT_HOLE::
[metadata]
RABBIT_HOLE::
[compressed JSON data]
RABBIT_HOLE::
[footer]
```

The compressed section contains newline-delimited JSON objects:

```json
{
  "id": "unique-id",
  "type": "page|asset|origin",
  "payload": {
    "url": "https://example.com/path",
    "path": "/optional/path"
  },
  "_fx": "ghost_new|ghost_deleted|pulse_update|null",
  "parent": "parent-id|null"
}
```

## Dependencies

All dependencies are loaded via CDN:

- **vis-network** (v9.1.9): Network graph visualization
- **pako** (v2.1.0): Zlib compression/decompression
- **html2pdf.js** (v0.10.1): PDF report generation

## Architecture

### Component Structure
```
┌─────────────────────────────────────────────────────┐
│                    HEADER (HUD)                     │
├──────────┬──────────────────────────┬───────────────┤
│          │                          │               │
│  LEFT    │    REACTOR STAGE         │    RIGHT      │
│ SIDEBAR  │   (Network Canvas)       │   SIDEBAR     │
│          │                          │               │
│ • Server │  • Graph Visualization   │ • Briefing    │
│ • Config │  • Node Rendering        │ • Heatmap     │
│ • Hangar │  • Edge Connections      │ • Logs        │
│          │                          │               │
├──────────┴──────────────────────────┴───────────────┤
│              FOOTER (DVR Controls)                  │
└─────────────────────────────────────────────────────┘
```

### State Management
- `allRows`: Complete dataset of ingested nodes
- `currentTick`: Current position in timeline
- `isPlaying`: Playback state
- `knownCapsules`: Set of loaded capsule filenames
- `heatmapData`: Map of node types to frequency data

### Auto-Sync
The interface polls the backend every 5 seconds for new capsules when connected.

## Customization

### Color Scheme
Modify CSS variables in `:root`:
```css
:root {
  --neon: #0ff;      /* Primary accent */
  --magenta: #f0f;   /* High priority */
  --yellow: #ff0;    /* Updates */
  --red: #f00;       /* Deletions */
  --bg: #000;        /* Background */
  --panel: #050505;  /* Panel background */
  --border: #111;    /* Border color */
}
```

### Node Visualization
Modify `renderNode()` function to customize:
- Node colors based on type
- Node shapes (dot, diamond, triangle, etc.)
- Node sizes
- Edge styling

### Heat Intensity
Adjust the heat intensity slider (0-100) to control heatmap visualization sensitivity.

## Browser Compatibility

Tested and compatible with:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Optimized for datasets up to 10,000 nodes
- Auto-limiting of log entries (100 max)
- Auto-limiting of briefing items (50 max)
- Efficient graph rendering with vis-network physics

## Troubleshooting

### No Data Displayed
- Check if backend server is running
- Verify SAS_URL configuration
- Check browser console for errors
- Try demo mode (automatic if backend unavailable)

### Graph Not Rendering
- Ensure vis-network CDN is accessible
- Check browser console for JavaScript errors
- Verify network canvas element exists

### PDF Export Fails
- Ensure html2pdf.js CDN is accessible
- Check browser console for errors
- Verify sufficient memory for large reports

## License

This is a standalone interface file for the CHRONOS project.

## Version

**CHRONOS v76** - Genesis Master Edition
