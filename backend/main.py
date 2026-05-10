from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any
from app.ai.schemas import MaterialProfile, FactoryProfile
from app.ai.engine import MatchingEngine

app = FastAPI(title="WasteMatrix API", version="1.0.0")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = MatchingEngine()

# Mock database of factories
MOCK_FACTORIES = [
    FactoryProfile(
        factory_name="EcoCement Plant A",
        industry_type="Construction",
        input_requirements={"classes": ["organic", "composite"], "elements": ["Calcium", "Carbon"]},
        required_volume_tonnes=500.0,
        location={"lat": 55.6761, "lng": 12.5683}, # Copenhagen area
        pre_treatment_capability=True
    ),
    FactoryProfile(
        factory_name="SteelCycle Foundry",
        industry_type="Metallurgy",
        input_requirements={"classes": ["metallic"], "elements": ["Iron", "Carbon", "Nickel"]},
        required_volume_tonnes=1200.0,
        location={"lat": 56.1629, "lng": 10.2039}, # Aarhus
        pre_treatment_capability=False
    ),
    FactoryProfile(
        factory_name="Bio-Polymer Works",
        industry_type="Chemicals",
        input_requirements={"classes": ["organic", "chemical"], "elements": ["Carbon", "Hydrogen", "Oxygen"]},
        required_volume_tonnes=200.0,
        location={"lat": 55.4038, "lng": 10.4024}, # Odense
        pre_treatment_capability=True
    )
]

# In-memory store for demonstration
waste_streams = {}

@app.post("/waste-streams", response_model=Dict[str, str])
async def create_waste_stream(profile: MaterialProfile):
    stream_id = f"stream_{len(waste_streams) + 1}"
    waste_streams[stream_id] = profile
    return {"id": stream_id, "message": "Waste stream registered and indexed for matching."}

@app.get("/matches/{stream_id}")
async def get_matches(stream_id: str):
    if stream_id not in waste_streams:
        raise HTTPException(status_code=404, detail="Waste stream not found")
    
    waste = waste_streams[stream_id]
    ranked_matches = engine.rank_matches(waste, MOCK_FACTORIES)
    return ranked_matches

@app.get("/network/stats")
async def get_network_stats():
    return {
        "active_flows": 124,
        "co2_avoided_tonnes": 4520,
        "landfill_diverted_tonnes": 12800,
        "total_cost_savings_usd": 1240000
    }

@app.get("/")
async def root():
    return {"status": "WasteMatrix AI Matching Engine Active"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
