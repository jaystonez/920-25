# 920-25
bbgptaura

## CHRONOS v77 - Sovereign Trust Visualizer Cockpit

A real-time visualization cockpit for the CHRONOS v77 Sovereign Trust network.

### Quick Start

```bash
# Serve the visualizer locally
python3 -m http.server 8888

# Open in browser
# http://localhost:8888/chronos_v77.html
```

### Features

- **Dynamic Node Placement**: Force-directed layout with automatic spacing
- **Heat Pulse Animation**: Visual feedback for LIKE events with intensity-based coloring
- **Reset Heatmap**: One-click restoration of default visual states
- **WebSocket Integration**: Real-time streaming of capsules and LIKE events
- **Weighted Directional Arcs**: Curved SVG paths showing network traffic flow
- **Bottleneck Detection**: Automatic highlighting of critical connections
- **Timeline Replay**: Historical replay with speed controls and scrubber
- **Demo Mode**: Automatic simulated data when WebSocket unavailable

### Documentation

See [README_CHRONOS_V77.md](README_CHRONOS_V77.md) for complete documentation including:
- Detailed feature descriptions
- WebSocket message format specifications
- Deployment guide
- Customization options
- Architecture overview

### Files

- `chronos_v77.html` - Main visualizer application (single-file, no dependencies)
- `README_CHRONOS_V77.md` - Complete documentation and usage guide
