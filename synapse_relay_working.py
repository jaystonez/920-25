#!/usr/bin/env python3
"""
SYNAPSE RELAY WORKING v1.0
WebSocket server compatible with websockets 15.x
"""

import asyncio
import json
import random
from datetime import datetime

try:
    import websockets
except ImportError:
    print("Error: websockets library not installed")
    print("Run: pip install websockets")
    exit(1)

PORT = 4001
active_nodes = {}
capsule_counter = 0
ledger_counter = 0

def generate_capsule():
    global capsule_counter
    capsule_counter += 1
    capsule_id = f"capsule_{capsule_counter:04d}"
    
    num_nodes = random.randint(1, 3)
    nodes = []
    for i in range(num_nodes):
        node_id = f"{capsule_id}_node_{i}"
        node = {
            "id": node_id,
            "type": random.choice(["SYNAPSE", "BLACKBOX", "RELAY"]),
            "payload": {
                "data": f"Test data {i}",
                "timestamp": datetime.now().isoformat(),
                "priority": random.randint(1, 10)
            },
            "_fx": "ghost_new" if random.random() < 0.3 else None,
            "parent": nodes[-1]["id"] if i > 0 and random.random() < 0.7 else None
        }
        nodes.append(node)
        active_nodes[node_id] = "in_airlock"
    
    return {"id": capsule_id, "nodes": nodes}

def generate_ledger():
    global ledger_counter
    ledger_counter += 1
    messages = [
        "Synapse mesh stabilized",
        "BlackBox airlock processing",
        "Ledger tick incremented",
        "Heat spike detected",
        "Capsule validation complete"
    ]
    return {"message": f"{random.choice(messages)} (Tick {ledger_counter})"}

def generate_status():
    if not active_nodes:
        return None
    node_id = random.choice(list(active_nodes.keys()))
    if active_nodes[node_id] == "in_airlock":
        new_status = random.choice(["approved", "failed"])
        active_nodes[node_id] = new_status
        return {"id": node_id, "status": new_status}
    return None

async def handler(websocket):
    client_addr = websocket.remote_address
    print(f"✅ Client connected: {client_addr}")
    
    try:
        while True:
            # Capsule ingress
            if random.random() < 0.4:
                capsule = generate_capsule()
                msg = json.dumps({"type": "capsule_ingress", "capsule": capsule})
                await websocket.send(msg)
                print(f"📦 Sent capsule: {capsule['id']} ({len(capsule['nodes'])} nodes)")
            
            # Ledger updates (with burst possibility)
            is_burst = random.random() < 0.3
            num_updates = random.randint(2, 4) if is_burst else 1
            if is_burst:
                print(f"🔥 HEAT BURST! Sending {num_updates} updates...")
            
            for _ in range(num_updates):
                ledger = generate_ledger()
                msg = json.dumps({"type": "ledger_update", "entry": ledger})
                await websocket.send(msg)
                print(f"📝 {ledger['message']}")
                await asyncio.sleep(0.2)
            
            # Status update
            status = generate_status()
            if status:
                msg = json.dumps({"type": "capsule_status", **status})
                await websocket.send(msg)
                print(f"🔄 Status: {status['id']} -> {status['status'].upper()}")
            
            await asyncio.sleep(random.uniform(1.5, 3.0))
            
    except websockets.exceptions.ConnectionClosed:
        print(f"❌ Client disconnected: {client_addr}")
    except Exception as e:
        print(f"❌ Error in handler: {type(e).__name__}: {e}")

async def main():
    print("=" * 60)
    print("🜇 SYNAPSE RELAY WORKING v1.0")
    print("=" * 60)
    print(f"🌐 WebSocket Server: ws://localhost:{PORT}")
    print(f"📊 Heat Burst Chance: 30%")
    print(f"🔧 Stateful Node Tracking: ENABLED")
    print("=" * 60)
    print("⏳ Waiting for connections...\n")
    
    async with websockets.serve(handler, "localhost", PORT):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\n\n🛑 Server shutdown requested")
        print("👋 Goodbye!")
