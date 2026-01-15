# CHRONOS v77 - Sovereign Trust Visualizer Cockpit

A real-time visualization cockpit for the CHRONOS v77 Sovereign Trust network, featuring dynamic node placement, heat pulse animations, weighted directional arcs, bottleneck detection, and historical replay capabilities.

## Features

### 1. **Dynamic Node Placement** (`renderNode`)
- **Force-directed layout algorithm**: Nodes are positioned dynamically with physics-based repulsion and attraction forces
- **Automatic spacing**: Nodes repel each other to prevent overlap and maintain visual clarity
- **Random initial placement**: New nodes spawn at randomized positions in a circular pattern around the viewport center
- **Continuous animation**: Node positions update in real-time as the network evolves

### 2. **Reset Heatmap** (`resetHeatmap`)
- Clears all heat effects from nodes, restoring them to default visual states
- Resets bottleneck indicators on arcs
- Resets all metrics related to heat and bottlenecks
- Useful after replay sessions or when starting fresh analysis

### 3. **Heat Pulse Animation** (`triggerHeatPulse`)
- **Proportional intensity**: Node heat increases based on LIKE event intensity
- **Visual feedback**: Nodes grow and change color (green → orange → red) as heat increases
- **Pulse animation**: Smooth scaling and glow effects during heat events
- **Automatic decay**: Heat gradually decreases over time after events

### 4. **WebSocket Integration**
- Real-time streaming of capsules and LIKE events
- Automatic reconnection on connection loss
- Demo mode with simulated data when WebSocket is unavailable
- Supports three message types:
  - `capsule`: Network traffic between nodes
  - `like`: Heat/activity events on specific nodes
  - `bottleneck`: Critical connection alerts

### 5. **Weighted Directional Arcs**
- Curved SVG paths showing directional flow between nodes
- Weight visualization through line thickness
- Smooth arc rendering with quadratic Bezier curves
- Dynamic updates as nodes move

### 6. **Bottleneck Detection**
- Automatic highlighting of critical connections in red
- Pulsing animation on bottleneck arcs
- Real-time bottleneck counter in metrics overlay
- Visual distinction from normal arcs

### 7. **Timeline Scrubber & Historical Replay**
- **Timeline control**: Drag the scrubber to navigate through history
- **Replay mode**: Re-experience network events from the recorded history
- **Speed controls**: Adjust replay speed from 0.25x to 5x
- **Timeline position**: Shows elapsed time during replay
- **Pause/Resume**: Full control over replay playback

## UI Components

### Metrics Overlay (Top Left)
- **Total Nodes**: Number of nodes in the network
- **Active Arcs**: Number of connections between nodes
- **Capsules Processed**: Total data transfers
- **LIKE Events**: Total activity events
- **Bottlenecks**: Number of critical connections detected

### Connection Status (Top Right)
- Shows WebSocket connection status
- Green for connected, red for disconnected

### Event Log (Bottom Right)
- Real-time event stream
- Color-coded by event type:
  - Green: Capsule events
  - Orange: LIKE events
  - Red: Bottleneck alerts
  - Gray: System messages

### Control Panel (Bottom)
- **System Mode**: LIVE or REPLAY
- **Timeline Position**: Current time in replay
- **Replay Speed**: Current playback speed multiplier
- **Heat Level**: Average heat across all nodes
- **Timeline Track**: Visual timeline with progress bar and draggable handle
- **Control Buttons**:
  - Reset Heatmap: Clear all heat effects
  - Start Replay: Begin historical replay
  - Pause: Pause replay
  - Go Live: Return to live mode
  - Speed 2x: Increase replay speed
  - Speed 0.5x: Decrease replay speed

## Usage

### Viewing in Browser

1. **Simple HTTP Server** (Python):
   ```bash
   python3 -m http.server 8888
   ```
   Then open: `http://localhost:8888/chronos_v77.html`

2. **Node.js HTTP Server**:
   ```bash
   npx http-server -p 8888
   ```
   Then open: `http://localhost:8888/chronos_v77.html`

### Connecting to WebSocket Feeder

The visualizer attempts to connect to a WebSocket server at `ws://localhost:8080` by default.

To change the WebSocket URL, modify line 854 in `chronos_v77.html`:
```javascript
connectWebSocket('ws://your-server:port');
```

### WebSocket Message Format

Send JSON messages in the following formats:

**Capsule Event** (data transfer):
```json
{
  "type": "capsule",
  "from": "ALPHA",
  "to": "BETA",
  "weight": 3
}
```

**LIKE Event** (node activity):
```json
{
  "type": "like",
  "nodeId": "GAMMA",
  "intensity": 2.5
}
```

**Bottleneck Alert**:
```json
{
  "type": "bottleneck",
  "from": "DELTA",
  "to": "EPSILON"
}
```

### Demo Mode

If no WebSocket connection is established within 3 seconds, the visualizer automatically enters **demo mode** with simulated data:
- Random capsules between 8 predefined nodes
- Periodic LIKE events with varying intensity
- Occasional bottleneck alerts

This allows testing and demonstration without a live data feed.

## Implementation Details

### Force-Directed Layout Algorithm

The `renderNode` function implements a simple force-directed graph layout:

1. **Repulsion Force**: Nodes within 150px repel each other with force inversely proportional to distance²
2. **Center Attraction**: Weak attraction to viewport center prevents nodes from drifting off-screen
3. **Velocity Damping**: 90% damping factor for smooth, stable movement
4. **Boundary Constraints**: Nodes are constrained within the viewport

### Heat Management

- Heat values range from 0-100
- Visual representation:
  - 0-30: Cool (green border, dark background)
  - 30-60: Warm (yellow/orange tints)
  - 60-100: Hot (red border, orange background, enlarged)
- Heat decay: -10 units per 2 seconds after heat events
- Pulse animation: 1-second scale and glow effect

### Performance

- Optimized for networks up to 50-100 nodes
- 60 FPS animation loop using `requestAnimationFrame`
- Efficient DOM updates with direct element property changes
- SVG arc rendering for smooth curved paths

## Browser Compatibility

- **Chrome/Edge**: ✅ Fully supported
- **Firefox**: ✅ Fully supported
- **Safari**: ✅ Fully supported
- **Mobile**: Limited support (interaction may be challenging on small screens)

## Architecture

```
┌─────────────────────────────────────────────┐
│         CHRONOS v77 Visualizer              │
├─────────────────────────────────────────────┤
│                                             │
│  ┌──────────────┐      ┌──────────────┐   │
│  │   WebSocket  │─────▶│  Event Queue │   │
│  │   Handler    │      │   (History)  │   │
│  └──────────────┘      └──────────────┘   │
│         │                      │           │
│         ▼                      ▼           │
│  ┌──────────────┐      ┌──────────────┐   │
│  │   Message    │      │    Replay    │   │
│  │   Processor  │      │    Engine    │   │
│  └──────────────┘      └──────────────┘   │
│         │                      │           │
│         └──────────┬───────────┘           │
│                    ▼                       │
│         ┌──────────────────┐              │
│         │   Render Engine  │              │
│         │   - renderNode   │              │
│         │   - renderArc    │              │
│         │   - heatPulse    │              │
│         └──────────────────┘              │
│                    │                       │
│                    ▼                       │
│         ┌──────────────────┐              │
│         │   Canvas Layer   │              │
│         │   - SVG Arcs     │              │
│         │   - Node DIVs    │              │
│         └──────────────────┘              │
│                                             │
└─────────────────────────────────────────────┘
```

## Customization

### Colors

Modify the CSS color scheme in the `<style>` section:
- `#00ff41`: Primary green color (nodes, borders, text)
- `#0a0e27`: Dark background
- `#ff4400`: Alert/bottleneck color

### Node Appearance

Adjust node size in the `renderNode` function (line 396):
```javascript
size: 30,  // Change to desired pixel size
```

### Force Parameters

Tune the layout algorithm (lines 376-378):
```javascript
repulsionStrength: 100,    // Higher = more spread
attractionStrength: 0.01,  // Higher = tighter clustering
damping: 0.9               // Lower = more bouncy movement
```

### Event Generation Rate

Modify demo mode interval (line 869):
```javascript
setInterval(() => {
  // Event generation code
}, 1000);  // Change interval in milliseconds
```

## Deployment

For production deployment:

1. **Static Hosting**: Upload `chronos_v77.html` to any static web host
2. **WebSocket Server**: Deploy your WebSocket feeder service
3. **Update URL**: Modify WebSocket connection URL in the HTML file
4. **HTTPS/WSS**: Use secure WebSocket (`wss://`) for HTTPS deployments

## Troubleshooting

**No nodes appearing:**
- Check browser console for errors
- Verify demo mode activated (check event log for "Starting demo mode" message)
- Ensure JavaScript is enabled

**WebSocket connection failing:**
- Verify WebSocket server is running
- Check WebSocket URL in code
- Look for CORS or firewall issues
- Demo mode should activate automatically as fallback

**Performance issues:**
- Reduce number of nodes (limit demo mode or filter incoming events)
- Lower animation frame rate if needed
- Close other browser tabs

**Arcs not rendering:**
- Check browser SVG support
- Verify node positions are within viewport
- Look for JavaScript errors in console

## License

This visualizer is part of the CHRONOS v77 project.

## Support

For issues, questions, or feature requests, please refer to the main project repository.
