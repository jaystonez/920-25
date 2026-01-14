# CHRONOS v77 :: SYNAPSE COMMAND

**Live WebSocket-Powered Command Center**

A real-time, stateful WebSocket interface for monitoring and visualizing network intelligence operations. This is the evolution from v76's polling-based system to a true live-streaming command center.

---

## 🚀 Quick Start

### 1. Start the WebSocket Server

```bash
python3 synapse_relay_working.py
```

Expected output:
```
============================================================
🜇 SYNAPSE RELAY WORKING v1.0
============================================================
🌐 WebSocket Server: ws://localhost:4001
📊 Heat Burst Chance: 30%
🔧 Stateful Node Tracking: ENABLED
============================================================
⏳ Waiting for connections...
```

### 2. Open the Command Center

```bash
# Option 1: Direct browser access
open chronos_v77.html

# Option 2: HTTP server
python3 -m http.server 8080
# Then visit: http://localhost:8080/chronos_v77.html
```

### 3. Watch the Magic ✨

- Connection status turns **GREEN** (WS_CONNECTED)
- Cyan diamonds appear (Airlock ingress)
- Heat stats spike during burst activity
- Nodes change color based on status (Green=approved, Red=failed)

---

## 📦 What's Included

### Core Files

| File | Description |
|------|-------------|
| `chronos_v77.html` | WebSocket-enabled command center UI |
| `synapse_relay_working.py` | Production-ready WebSocket server |
| `synapse_relay_advanced.py` | Full-featured advanced server |
| `test_ws_better.py` | WebSocket connection test utility |
| `COMPARISON.md` | Detailed comparison of server architectures |

### Legacy Files

| File | Description |
|------|-------------|
| `index.html` | CHRONOS v76 (polling-based) |
| `README.md` | v76 documentation |

---

## 🎯 Key Features

### Real-Time WebSocket Streaming
- **No Polling:** Instant updates via WebSocket connection
- **Auto-Reconnect:** Exponential backoff (up to 10 attempts)
- **Connection Status:** Visual indicator in header

### Stateful Node Tracking
- **Lifecycle Management:** `in_airlock` → `approved` or `failed`
- **Logical Transitions:** Prevents invalid state changes
- **Persistent State:** Server tracks all active nodes

### Dynamic Heat System
- **Heat Bursts:** 30% chance of rapid-fire updates (2-4 messages)
- **Visual Feedback:** Radial glow overlay scales with intensity
- **Node Scaling:** Nodes grow during high activity
- **Auto-Cooling:** Heat dissipates over 3 seconds

### Hierarchical Capsules
- **Tree Structure:** 1-3 nodes per capsule with parent-child relationships
- **Branching Networks:** Realistic site architecture simulation
- **Ghost Markers:** Special `ghost_new` effect for new entities

### Interactive Graph
- **vis-network:** Physics-based graph rendering
- **Node Inspector:** Click nodes to view detailed payload
- **Auto-Center:** Re-center view with one click
- **Directional Edges:** Arrows show parent-child relationships

### DVR Timeline
- **Event Storage:** All events stored for playback
- **Seek Control:** Click timeline to jump to specific tick
- **Playhead:** Visual indicator of current position
- **Pause/Resume:** Control stream flow

---

## 🎨 UI Components

### Header
- **Logo:** WR :: SYNAPSE_v77
- **Connection Status:** WS_CONNECTED / WS_DISCONNECTED
- **Ledger Tick:** Current event counter

### Left Sidebar: Airlock Monitor
- **Active Capsules:** Real-time ingress feed
- **System Controls:**
  - Pause/Resume Stream
  - Re-Center Graph
  - Clear Graph
- **Statistics:**
  - Total Nodes
  - Capsules Received
  - Approved Count
  - Failed Count

### Center Stage: Reactor
- **Network Canvas:** Interactive graph visualization
- **Heatmap Overlay:** Radial glow effect
- **Node Inspector:** Detailed node information panel

### Right Sidebar: Intelligence
- **Briefing Feed:** Capsule ingress notifications
- **Operational Heat:** Real-time intensity percentage
- **Unified Ledger Logs:** Scrolling system log (100 entries max)

### Footer: DVR Controls
- **Timeline Rail:** Clickable seek bar with playhead
- **Controls:** Jump to start, event counter, purge button

---

## 🔧 Technical Details

### WebSocket Protocol

#### Message Types

**1. Capsule Ingress**
```json
{
  "type": "capsule_ingress",
  "capsule": {
    "id": "capsule_0001",
    "nodes": [
      {
        "id": "capsule_0001_node_0",
        "type": "SYNAPSE",
        "payload": {
          "data": "Test data 0",
          "timestamp": "2026-01-14T10:15:30.123456",
          "priority": 7
        },
        "_fx": "ghost_new",
        "parent": null
      }
    ]
  }
}
```

**2. Ledger Update**
```json
{
  "type": "ledger_update",
  "entry": {
    "message": "Synapse mesh stabilized (Tick 42)"
  }
}
```

**3. Capsule Status**
```json
{
  "type": "capsule_status",
  "id": "capsule_0001_node_0",
  "status": "approved"
}
```

### Node States

| State | Color | Description |
|-------|-------|-------------|
| `in_airlock` | Cyan (#0af) | Initial state, awaiting processing |
| `approved` | Green (#0f0) | Validated and accepted |
| `failed` | Red (#f00) | Rejected or invalid |
| `archived` | Gray (#555) | Stored for historical reference |

### Node Types

- **SYNAPSE:** Core network nodes
- **BLACKBOX:** Data processing units
- **RELAY:** Communication hubs
- **GATEWAY:** Entry/exit points

### Special Effects

- **`ghost_new`:** Diamond shape, magenta color (#f0f), size 20
- **Heat Burst:** 2-4 rapid updates with 0.2s delay
- **Node Pulse:** Size scales with heat intensity (15 + heat/5)

---

## 🧪 Testing

### Test WebSocket Connection

```bash
python3 test_ws_better.py
```

Expected output:
```
Connecting to ws://localhost:4001...
✅ Connected!
📡 Receiving messages...

1. ledger_update
   Synapse mesh stabilized (Tick 1)
2. capsule_ingress
   Capsule: capsule_0001, Nodes: 2
3. ledger_update
   BlackBox airlock processing (Tick 2)
4. capsule_status
   Node: capsule_0001_node_0 -> approved
5. ledger_update
   Heat spike detected (Tick 3)

✅ Test completed!
```

### Manual Testing

1. **Connection Test:** Open browser console, check for WebSocket connection
2. **Heat Burst:** Watch for rapid ledger updates (30% chance)
3. **Node Lifecycle:** Observe cyan → green/red transitions
4. **Inspector:** Click nodes to view payload details
5. **Stream Control:** Test pause/resume functionality

---

## 📊 Performance

### Server
- **Language:** Python 3.9+
- **Library:** websockets 15.0.1
- **Concurrency:** asyncio event loop
- **Memory:** ~22 MB per process
- **CPU:** Minimal (<1% idle, <5% active)

### Client
- **Framework:** vis-network 9.1.9
- **Rendering:** Canvas-based graph
- **Memory:** ~50-100 MB (depends on node count)
- **Optimization:** Auto-limiting (100 logs, 50 briefings)

### Scalability
- **Tested:** Up to 1000 nodes
- **Recommended:** 100-500 nodes for optimal performance
- **Bottleneck:** Graph physics calculations

---

## 🎓 Architecture Comparison

See [COMPARISON.md](COMPARISON.md) for detailed analysis of:
- Hierarchical tree structure vs flat pairs
- Heat burst system vs linear stream
- Stateful tracking vs stateless operation
- Rich payloads vs minimal data

**TL;DR:** The advanced version provides a **professional-grade simulation** suitable for GitHub portfolio projects and demonstrations.

---

## 🐛 Troubleshooting

### WebSocket Won't Connect

**Problem:** Connection status stays "WS_DISCONNECTED"

**Solutions:**
1. Check if server is running: `ps aux | grep synapse_relay`
2. Test port: `python3 -c "import socket; s = socket.socket(); print(s.connect_ex(('localhost', 4001)))"`
3. Check firewall settings
4. Try different port in both server and HTML

### Server Crashes on Connection

**Problem:** Server exits when client connects

**Solutions:**
1. Check Python version: `python3 --version` (requires 3.9+)
2. Update websockets: `pip install --upgrade websockets`
3. Use `synapse_relay_working.py` (tested version)

### Graph Not Rendering

**Problem:** Blank center stage

**Solutions:**
1. Check browser console for errors
2. Verify vis-network CDN is accessible
3. Try different browser (Chrome/Firefox recommended)
4. Disable browser extensions

### High CPU Usage

**Problem:** Browser becomes slow

**Solutions:**
1. Click "CLEAR GRAPH" to reset
2. Reduce physics calculations (edit HTML)
3. Limit node count in server
4. Use "PAUSE STREAM" during idle periods

---

## 🔮 Future Enhancements

### Planned Features
- [ ] Multiple client support (broadcast to all)
- [ ] Persistent storage (SQLite/Redis)
- [ ] Authentication/authorization
- [ ] Custom node types via config
- [ ] Export graph as image/JSON
- [ ] Replay mode from saved sessions
- [ ] Real-time metrics dashboard
- [ ] WebSocket compression

### Community Contributions
- Fork the repository
- Create feature branch
- Submit pull request
- Follow coding standards

---

## 📜 License

This is a demonstration project for educational and portfolio purposes.

---

## 🙏 Acknowledgments

- **vis-network:** Graph visualization library
- **websockets:** Python WebSocket implementation
- **CHRONOS Project:** Original concept and design

---

## 📞 Support

For issues, questions, or contributions:
1. Check [COMPARISON.md](COMPARISON.md) for architecture details
2. Review troubleshooting section above
3. Test with `test_ws_better.py` utility
4. Check browser console for errors

---

**THE GRID HAS EVOLVED. OPERATIONAL MIRROR INITIATED.** 🜇

---

## Version History

- **v77:** WebSocket streaming, stateful tracking, heat bursts
- **v76:** Polling-based, auto-sync, AURA format support
- **v66:** Initial release with DVR timeline

---

*Last Updated: January 14, 2026*
