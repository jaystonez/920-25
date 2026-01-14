#!/usr/bin/env python3
import asyncio
import websockets
import json

async def test():
    uri = "ws://localhost:4001"
    print(f"Connecting to {uri}...")
    
    try:
        websocket = await websockets.connect(uri)
        print("✅ Connected!")
        print("📡 Receiving messages...\n")
        
        for i in range(5):
            try:
                message = await asyncio.wait_for(websocket.recv(), timeout=5.0)
                data = json.loads(message)
                print(f"{i+1}. {data['type']}")
                if 'capsule' in data:
                    print(f"   Capsule: {data['capsule']['id']}, Nodes: {len(data['capsule']['nodes'])}")
                elif 'entry' in data:
                    print(f"   {data['entry']['message']}")
                elif 'status' in data:
                    print(f"   Node: {data['id']} -> {data['status']}")
            except asyncio.TimeoutError:
                print(f"{i+1}. (timeout)")
        
        await websocket.close()
        print("\n✅ Test completed!")
        
    except Exception as e:
        print(f"❌ Error: {type(e).__name__}: {e}")

asyncio.run(test())
