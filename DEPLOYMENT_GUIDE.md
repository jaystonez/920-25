# CHRONOS v77 :: Deployment Guide

## 🎯 Complete Setup Instructions

This guide will help you deploy the CHRONOS v77 Synapse Command Center from scratch.

---

## Prerequisites

### System Requirements
- **Python:** 3.9 or higher
- **Browser:** Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+
- **Network:** Port 4001 available for WebSocket server

### Python Dependencies
```bash
pip install websockets
```

---

## 📦 Installation

### Step 1: Clone or Download Files

Ensure you have these files in your project directory:

```
chronos_v77/
├── chronos_v77.html              # Main UI (19 KB)
├── synapse_relay_working.py      # WebSocket server (4.2 KB)
├── test_ws_better.py             # Test utility (1.2 KB)
├── README_v77.md                 # Documentation (9.5 KB)
├── COMPARISON.md                 # Architecture comparison (6.3 KB)
└── DEPLOYMENT_GUIDE.md           # This file
```

### Step 2: Install Dependencies

```bash
# Check Python version
python3 --version  # Should be 3.9+

# Install websockets library
python3 -m pip install websockets

# Verify installation
python3 -c "import websockets; print(f'websockets {websockets.__version__} installed')"
```

---

## 🚀 Quick Start (3 Steps)

### 1. Start the WebSocket Server

```bash
python3 synapse_relay_working.py
```

**Expected Output:**
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

**Keep this terminal open!** The server must run continuously.

### 2. Test the Connection (Optional but Recommended)

Open a **new terminal** and run:

```bash
python3 test_ws_better.py
```

**Expected Output:**
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

If you see this, **your server is working perfectly!**

### 3. Open the Command Center

**Option A: Direct File Access**
```bash
# macOS
open chronos_v77.html

# Linux
xdg-open chronos_v77.html

# Windows
start chronos_v77.html
```

**Option B: HTTP Server (Recommended)**
```bash
# Start HTTP server
python3 -m http.server 8080

# Open browser to:
# http://localhost:8080/chronos_v77.html
```

---

## ✅ Verification Checklist

After opening the UI, verify these indicators:

### 1. Connection Status (Header)
- [ ] Status shows **"WS_CONNECTED"** in green
- [ ] Status has green glow effect
- [ ] Ledger tick counter is incrementing

### 2. Graph Activity (Center Stage)
- [ ] Cyan diamond nodes appear (capsule ingress)
- [ ] Nodes have labels (SYNAPSE, BLACKBOX, RELAY)
- [ ] Edges connect parent-child nodes
- [ ] Nodes change color (cyan → green/red)

### 3. Heat System (Right Sidebar)
- [ ] Heat percentage updates (0-100%)
- [ ] Heat color changes (cyan → yellow → red)
- [ ] Radial glow appears during bursts

### 4. Logs (Right Sidebar)
- [ ] Ledger logs scroll automatically
- [ ] New entries appear in cyan
- [ ] Entries fade to gray after 2 seconds

### 5. Briefing Feed (Right Sidebar)
- [ ] Capsule cards appear
- [ ] Shows capsule ID and node count
- [ ] Status pills display "AIRLOCK"

### 6. Statistics (Left Sidebar)
- [ ] Total Nodes counter increases
- [ ] Capsules counter increases
- [ ] Approved/Failed counters update

---

## 🎮 Using the Interface

### Basic Controls

**Pause/Resume Stream**
- Click "⏸ PAUSE STREAM" to stop receiving updates
- Click "▶ RESUME STREAM" to continue
- Useful for examining specific states

**Re-Center Graph**
- Click "🎥 RE-CENTER" to fit all nodes in view
- Automatically adjusts zoom and position

**Clear Graph**
- Click "🗑️ CLEAR GRAPH" to reset everything
- Confirms before clearing
- Resets all counters and statistics

**Purge System**
- Click "💥 PURGE" in footer to reload page
- Nuclear option: complete reset

### Advanced Features

**Node Inspector**
- Click any node to view details
- Shows: ID, Type, Status, Payload
- Click elsewhere to close

**Timeline Seek**
- Click anywhere on timeline rail
- Jumps to specific event tick
- Playhead shows current position

**Heat Monitoring**
- Watch for heat bursts (30% chance)
- Heat > 70% = Red (critical)
- Heat 40-70% = Yellow (elevated)
- Heat < 40% = Cyan (normal)

---

## 🔧 Configuration

### Server Configuration

Edit `synapse_relay_working.py`:

```python
# Change port
PORT = 4001  # Default

# Adjust timing
await asyncio.sleep(random.uniform(1.5, 3.0))  # Message interval

# Modify burst chance
is_burst = random.random() < 0.3  # 30% chance

# Change node count per capsule
num_nodes = random.randint(1, 3)  # 1-3 nodes
```

### UI Configuration

Edit `chronos_v77.html`:

```javascript
// Change WebSocket URL
const wsUrl = 'ws://localhost:4001';

// Adjust reconnection attempts
const MAX_RECONNECT_ATTEMPTS = 10;

// Modify graph physics
physics: { 
    barnesHut: { 
        gravitationalConstant: -2000,  // Repulsion force
        centralGravity: 0.3,           // Center pull
        springLength: 100,             // Edge length
        springConstant: 0.04           // Edge stiffness
    } 
}

// Change heat cooling rate
setTimeout(() => {
    heatIntensity = Math.max(heatIntensity - 5, 0);
    updateHeatUI();
}, 3000);  // 3 second cooldown
```

---

## 🐛 Troubleshooting

### Problem: "WS_DISCONNECTED" Status

**Cause:** Server not running or wrong port

**Solutions:**
```bash
# Check if server is running
ps aux | grep synapse_relay

# Check if port is open
python3 -c "import socket; s = socket.socket(); print('OPEN' if s.connect_ex(('localhost', 4001)) == 0 else 'CLOSED')"

# Restart server
pkill -f synapse_relay
python3 synapse_relay_working.py
```

### Problem: No Nodes Appearing

**Cause:** Stream paused or server not sending data

**Solutions:**
1. Check "PAUSE STREAM" button - should say "⏸ PAUSE"
2. Look at server terminal for activity
3. Run `test_ws_better.py` to verify server
4. Check browser console (F12) for errors

### Problem: Graph Performance Issues

**Cause:** Too many nodes

**Solutions:**
```javascript
// In chronos_v77.html, disable physics
physics: { enabled: false }

// Or reduce node count in server
num_nodes = random.randint(1, 2)  # Fewer nodes per capsule
```

### Problem: Server Crashes

**Cause:** Python version or websockets compatibility

**Solutions:**
```bash
# Check versions
python3 --version  # Need 3.9+
python3 -c "import websockets; print(websockets.__version__)"  # Need 10.0+

# Upgrade websockets
pip install --upgrade websockets

# Use Python 3.9+ explicitly
python3.9 synapse_relay_working.py
```

---

## 🌐 Production Deployment

### Security Considerations

**⚠️ WARNING:** This is a demonstration project. For production:

1. **Authentication:** Add WebSocket authentication
2. **Encryption:** Use WSS (WebSocket Secure) instead of WS
3. **Rate Limiting:** Implement message throttling
4. **Input Validation:** Sanitize all data
5. **CORS:** Configure proper CORS headers

### Hosting Options

**Option 1: Local Network**
```python
# In synapse_relay_working.py, change:
async with websockets.serve(handler, "0.0.0.0", PORT):
    # Now accessible from other devices on network
```

**Option 2: Cloud Deployment**
- Deploy server to AWS/GCP/Azure
- Use reverse proxy (nginx) for WSS
- Update `wsUrl` in HTML to cloud address

**Option 3: Docker Container**
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY . .
RUN pip install websockets
EXPOSE 4001
CMD ["python3", "synapse_relay_working.py"]
```

---

## 📊 Performance Tuning

### Server Optimization

```python
# Reduce message frequency
await asyncio.sleep(random.uniform(2.0, 4.0))  # Slower

# Limit active nodes
if len(active_nodes) > 100:
    # Remove oldest nodes
    oldest = list(active_nodes.keys())[0]
    del active_nodes[oldest]
```

### Client Optimization

```javascript
// Limit log entries
while (logs.children.length > 50) {  // Reduced from 100
    logs.removeChild(logs.lastChild);
}

// Disable physics after threshold
if (nodes.length > 200) {
    network.setOptions({ physics: { enabled: false } });
}
```

---

## 📈 Monitoring

### Server Metrics

```bash
# CPU usage
ps aux | grep synapse_relay | awk '{print $3}'

# Memory usage
ps aux | grep synapse_relay | awk '{print $4, $6}'

# Connection count
netstat -an | grep 4001 | grep ESTABLISHED | wc -l
```

### Client Metrics

Open browser console (F12):

```javascript
// Node count
console.log('Nodes:', nodes.length);

// Event count
console.log('Events:', allEvents.length);

// Heat intensity
console.log('Heat:', heatIntensity);

// Connection state
console.log('Connected:', socket.readyState === WebSocket.OPEN);
```

---

## 🎓 Learning Resources

### Understanding the Code

1. **WebSocket Basics:** [MDN WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
2. **Python asyncio:** [Python asyncio docs](https://docs.python.org/3/library/asyncio.html)
3. **vis-network:** [vis-network documentation](https://visjs.github.io/vis-network/docs/network/)

### Architecture Deep Dive

Read [COMPARISON.md](COMPARISON.md) for:
- Hierarchical tree structures
- Heat burst system design
- Stateful node tracking
- Payload architecture

---

## 🤝 Contributing

### Development Workflow

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Test** thoroughly with `test_ws_better.py`
4. **Commit** changes: `git commit -m 'Add amazing feature'`
5. **Push** to branch: `git push origin feature/amazing-feature`
6. **Open** Pull Request

### Code Standards

- **Python:** Follow PEP 8
- **JavaScript:** Use ES6+ features
- **Comments:** Explain "why", not "what"
- **Testing:** Include test cases

---

## 📞 Support

### Getting Help

1. **Check Documentation:**
   - [README_v77.md](README_v77.md) - Full feature documentation
   - [COMPARISON.md](COMPARISON.md) - Architecture details
   - This file - Deployment and troubleshooting

2. **Test Utilities:**
   - Run `test_ws_better.py` to verify server
   - Check browser console (F12) for errors
   - Review server terminal output

3. **Common Issues:**
   - See Troubleshooting section above
   - Check Prerequisites section
   - Verify all files are present

---

## 🎉 Success Indicators

You've successfully deployed CHRONOS v77 when you see:

✅ Server running with "Waiting for connections..." message  
✅ UI shows "WS_CONNECTED" in green  
✅ Nodes appearing and changing colors  
✅ Heat stats updating dynamically  
✅ Logs scrolling in real-time  
✅ Statistics counters incrementing  
✅ Node inspector showing details on click  

**Congratulations! Your Synapse Command Center is operational.** 🜇

---

## 📝 Quick Reference

### Start Server
```bash
python3 synapse_relay_working.py
```

### Test Connection
```bash
python3 test_ws_better.py
```

### Open UI
```bash
python3 -m http.server 8080
# Visit: http://localhost:8080/chronos_v77.html
```

### Stop Server
```bash
# Press Ctrl+C in server terminal
# Or:
pkill -f synapse_relay
```

---

**THE GRID HAS EVOLVED. OPERATIONAL MIRROR INITIATED.** 🜇

*Last Updated: January 14, 2026*
