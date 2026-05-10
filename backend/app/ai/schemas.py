from typing import Dict, List, Optional
from pydantic import BaseModel, Field

class ElementalComposition(BaseModel):
    element: str
    percentage: float

class MaterialProfile(BaseModel):
    material_name: str
    material_class: str = Field(..., description="organic, metallic, chemical, composite")
    elemental_composition: List[ElementalComposition]
    hazard_classification: List[str] = Field(default_factory=list, description="REACH, GHS classifications")
    volume_tonnes_per_month: float
    processing_tolerances: Dict[str, float] = Field(
        default_factory=dict, 
        description="e.g., {'max_temp': 400, 'min_ph': 4.5, 'max_contamination': 0.05}"
    )
    location: Dict[str, float] = Field(..., description="lat, lng for distance calculation")

class FactoryProfile(BaseModel):
    factory_name: str
    industry_type: str
    input_requirements: Dict[str, List[str]] = Field(..., description="Accepted material classes and elements")
    required_volume_tonnes: float
    location: Dict[str, float]
    pre_treatment_capability: bool = False
