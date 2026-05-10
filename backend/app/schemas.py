from pydantic import BaseModel, EmailStr
from typing import List, Dict, Optional

# Material Schemas
class MaterialBase(BaseModel):
    name: str
    material_class: str
    elements: List[str]
    tonnes: float
    latitude: float
    longitude: float

class MaterialCreate(MaterialBase):
    pass

class Material(MaterialBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True

# User Schemas
class UserBase(BaseModel):
    company_name: str
    industrial_id: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    materials: List[Material] = []

    class Config:
        orm_mode = True

# Auth Schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None
