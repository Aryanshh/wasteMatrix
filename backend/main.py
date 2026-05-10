from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

import database
from app import models, schemas
from app.ai.engine import MatchingEngine

# Initialize Database Tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="WasteMatrix Neural Core", version="1.0.0")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = MatchingEngine()

# --- Auth Endpoints ---

@app.post("/auth/signup", response_model=schemas.User)
def signup(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Industrial ID already registered")
    
    # In a production app, we would hash the password here
    new_user = models.User(
        company_name=user.company_name,
        industrial_id=user.industrial_id,
        email=user.email,
        hashed_password=user.password # Placeholder for hashing
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@app.post("/auth/login")
def login(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if not db_user or db_user.hashed_password != user.password:
        raise HTTPException(status_code=401, detail="Invalid Neural Signature")
    return {"status": "authorized", "user": db_user.company_name}

# --- Material Endpoints ---

@app.post("/materials", response_model=schemas.Material)
def create_material(material: schemas.MaterialCreate, db: Session = Depends(database.get_db)):
    # Associate with first user for demo purposes
    owner = db.query(models.User).first()
    if not owner:
        raise HTTPException(status_code=400, detail="No active Industrial Hub found. Please sign up.")
    
    new_material = models.Material(
        **material.dict(),
        owner_id=owner.id
    )
    db.add(new_material)
    db.commit()
    db.refresh(new_material)
    return new_material

@app.get("/materials", response_model=List[schemas.Material])
def get_materials(db: Session = Depends(database.get_db)):
    return db.query(models.Material).all()

# --- Network Stats ---

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
    return {"status": "WasteMatrix Neural Core Active", "database": "SQLAlchemy/SQLite"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
