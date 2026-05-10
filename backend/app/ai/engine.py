import math
from typing import List, Dict, Any
from .schemas import MaterialProfile, FactoryProfile

class MatchingEngine:
    def __init__(self):
        # Weights for the composite score
        self.weights = {
            "compatibility": 0.5,
            "feasibility": 0.3,
            "volume_alignment": 0.2
        }

    def haversine_distance(self, loc1: Dict[str, float], loc2: Dict[str, float]) -> float:
        """Calculate the great-circle distance between two points on the Earth."""
        R = 6371  # Earth radius in kilometers
        lat1, lon1 = math.radians(loc1["lat"]), math.radians(loc1["lng"])
        lat2, lon2 = math.radians(loc2["lat"]), math.radians(loc2["lng"])
        
        dlat = lat2 - lat1
        dlon = lon2 - lon1
        
        a = math.sin(dlat / 2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2)**2
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
        return R * c

    def calculate_compatibility(self, waste: MaterialProfile, factory: FactoryProfile) -> Dict[str, Any]:
        """Predict whether waste stream A is a viable input for factory B."""
        score = 0.0
        explanations = []

        # 1. Class matching
        if waste.material_class in factory.input_requirements.get("classes", []):
            score += 0.4
            explanations.append(f"Material class '{waste.material_class}' is a direct match for this industry.")
        else:
            explanations.append(f"Material class mismatch, pre-treatment or specialized processing may be required.")

        # 2. Elemental composition check
        factory_elements = set(factory.input_requirements.get("elements", []))
        waste_elements = set([e.element for e in waste.elemental_composition])
        overlap = waste_elements.intersection(factory_elements)
        
        if overlap:
            overlap_score = (len(overlap) / len(waste_elements)) * 0.4
            score += overlap_score
            explanations.append(f"High elemental overlap: {', '.join(overlap)} detected.")
        
        # 3. Hazard constraint
        if any(h in ["Toxic", "Reactive"] for h in waste.hazard_classification) and not factory.pre_treatment_capability:
            score *= 0.5
            explanations.append("Warning: High hazard classification requires pre-treatment facilities not present at receiver.")
        elif factory.pre_treatment_capability:
            score += 0.2
            explanations.append("Receiver has pre-treatment capabilities for hazardous materials.")

        return {"score": min(1.0, score), "tags": explanations}

    def calculate_feasibility(self, waste: MaterialProfile, factory: FactoryProfile) -> Dict[str, Any]:
        """Accounts for logistics and volume alignment."""
        # Proximity score (inverse of distance)
        distance = self.haversine_distance(waste.location, factory.location)
        # Assuming 500km is a reasonable max for industrial symbiosis
        proximity_score = max(0, 1 - (distance / 500))
        
        # Volume alignment
        # How well does the supply match the demand?
        volume_ratio = waste.volume_tonnes_per_month / factory.required_volume_tonnes
        volume_score = 1.0 - abs(1.0 - volume_ratio) if volume_ratio < 2 else 0.5
        volume_score = max(0, min(1.0, volume_score))

        composite_feasibility = (proximity_score * 0.6) + (volume_score * 0.4)
        
        explanations = [
            f"Distance: {distance:.1f}km. {'Near-optimal logistics.' if distance < 50 else 'Logistics costs may apply.'}",
            f"Volume match: {waste.volume_tonnes_per_month}t supply vs {factory.required_volume_tonnes}t demand."
        ]

        return {
            "score": composite_feasibility,
            "distance_km": distance,
            "volume_alignment": volume_score,
            "tags": explanations
        }

    def rank_matches(self, waste: MaterialProfile, factories: List[FactoryProfile]) -> List[Dict[str, Any]]:
        matches = []
        for factory in factories:
            comp = self.calculate_compatibility(waste, factory)
            feas = self.calculate_feasibility(waste, factory)
            
            final_score = (comp["score"] * self.weights["compatibility"]) + \
                          (feas["score"] * (self.weights["feasibility"] + self.weights["volume_alignment"]))
            
            matches.append({
                "factory_name": factory.factory_name,
                "score": round(final_score, 2),
                "compatibility_breakdown": comp,
                "feasibility_breakdown": feas,
                "explanation_tags": comp["tags"] + feas["tags"]
            })
            
        return sorted(matches, key=lambda x: x["score"], reverse=True)
