#!/usr/bin/env python3
"""
SYNAPSE RELAY ADVANCED v2.0
Advanced WebSocket server with stateful node tracking, heat bursts, and hierarchical capsule generation.
"""

import asyncio
import json
import random
import websockets
from datetime import datetime

# Configuration
PORT = 4001
CAPSULE_INTERVAL = 3  # Seconds between capsule ingresses
LEDGER_INTERVAL = 1   # Seconds between ledger updates
STATUS_UPDATE_INTERVAL = 5  # Seconds between status changes
HEAT_BURST_CHANCE = 0.3  # Probability of a "heat burst" (multiple ledger updates)

# Global state for mock data
active_nodes = {}  # Track nodes by ID for status updates
capsule_counter = 0
ledger_counter = 0

def generate_mock_capsule():
    """Generate a hierarchical capsule with 1-5 nodes forming a tree structure."""
    global capsule_counter
    capsule_counter += 1
    capsule_id = f"capsule_{capsule_counter:04d}"
    
    # Generate a small tree of nodes (1-5 nodes per capsule)
    num_nodes = random.randint(1, 5)
    nodes = []
    for i in range(num_nodes):
        node_id = f"{capsule_id}_node_{i}"
        node_type = random.choice(["SYNAPSE", "BLACKBOX", "RELAY", "GATEWAY"])
        payload = {
            "data": f"Mock payload for {node_type}",
            "timestamp": datetime.now().isoformat(),
            "priority": random.randint(1, 10)
        }
        _fx = "ghost_new" if random.random() < 0.5 else None  # Special effect for new nodes
        parent = nodes[-1]["id"] if i > 0 and random.random() < 0.7 else None  # Hierarchical links
        
        node = {
            "id": node_id,
            "type": node_type,
            "payload": payload,
            "_fx": _fx,
            "parent": parent
        }
        nodes.append(node)
        active_nodes[node_id] = "in_airlock"  # Initial status
    
    return {"id": capsule_id, "nodes": nodes}

def generate_mock_ledger_update():
    """Generate a ledger update message."""
    global ledger_counter
    ledger_counter += 1
    messages = [
        "Synapse mesh stabilized.",
        "BlackBox airlock processing ingress.",
        "Ledger tick incremented.",
        "Heat spike detected in relay network.",
        "Capsule validation complete.",
        "Node synchronization achieved."
    ]
    return {"message": f"{random.choice(messages)} (Tick {ledger_counter})"}

def generate_mock_status_update():
    """Generate a status update for an existing node with logical state transitions."""
    if not active_nodes:
        return None
    node_id = random.choice(list(active_nodes.keys()))
    current_status = active_nodes[node_id]
    if current_status == "in_airlock":
        new_status = random.choice(["approved", "failed"])
        active_nodes[node_id] = new_status
        return {"id": node_id, "status": new_status}
    return None

async def broadcast_events(websocket):
    """Main event broadcasting loop with heat bursts and stateful updates."""
    print(f"✅ Client connected from {websocket.remote_address}")
    print("📡 Starting mock data stream...")
    
    try:
        while True:
            # Send capsule ingress
            if random.random() < 0.5:  # 50% chance per cycle
                capsule = generate_mock_capsule()
                await websocket.send(json.dumps({"type": "capsule_ingress", "capsule": capsule}))
                print(f"📦 Sent capsule: {capsule['id']} ({len(capsule['nodes'])} nodes)")
            
            # Send ledger update (with heat burst possibility)
            is_burst = random.random() < HEAT_BURST_CHANCE
            num_updates = random.randint(3, 5) if is_burst else 1
            if is_burst:
                print(f"🔥 HEAT BURST! Sending {num_updates} rapid updates...")
            for _ in range(num_updates):
                update = generate_mock_ledger_update()
                await websocket.send(json.dumps({"type": "ledger_update", "entry": update}))
                print(f"📝 Ledger: {update['message']}")
                await asyncio.sleep(0.2)  # Slight delay for burst effect
            
            # Send status update
            status_update = generate_mock_status_update()
            if status_update:
                await websocket.send(json.dumps({"type": "capsule_status", **status_update}))
                print(f"🔄 Status: Node {status_update['id']} -> {status_update['status'].upper()}")
            
            # Wait before next cycle
            await asyncio.sleep(random.uniform(CAPSULE_INTERVAL, LEDGER_INTERVAL + 2))
    except websockets.exceptions.ConnectionClosed:
        print(f"❌ Client disconnected from {websocket.remote_address}")

async def handler(websocket, path):
    """WebSocket connection handler."""
    try:
        await broadcast_events(websocket)
    except websockets.exceptions.ConnectionClosed:
        pass

async def main():
    """Start the WebSocket server."""
    print("=" * 60)
    print("🜇 SYNAPSE RELAY ADVANCED v2.0")
    print("=" * 60)
    print(f"🌐 WebSocket Server: ws://localhost:{PORT}")
    print(f"📊 Capsule Interval: {CAPSULE_INTERVAL}s")
    print(f"📈 Heat Burst Chance: {HEAT_BURST_CHANCE * 100}%")
    print(f"🔧 Stateful Node Tracking: ENABLED")
    print("=" * 60)
    print("⏳ Waiting for connections...\n")
    
    server = await websockets.serve(handler, "localhost", PORT)
    await server.wait_closed()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\n\n🛑 Server shutdown requested")
        print("👋 Goodbye!")
