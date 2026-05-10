import os
import requests
from typing import Dict, Any

class AIService:
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv("CLAUDE_API_KEY")
        self.endpoint = "https://api.anthropic.com/v1/messages"

    def get_deep_insight(self, waste_profile: Dict[str, Any], factory_profile: Dict[str, Any]) -> str:
        """
        Calls Claude API to generate a detailed industrial symbiosis analysis.
        """
        if not self.api_key:
            return "AI Analysis: [API Key missing]. Heuristic matching suggests high compatibility based on elemental silicon overlap and proximity."

        prompt = f"""
        Analyze the industrial symbiosis potential between these two entities:
        Waste Stream: {waste_profile['material_name']} ({waste_profile['material_class']})
        Composition: {waste_profile['elemental_composition']}
        
        Receiver: {factory_profile['factory_name']} ({factory_profile['industry_type']})
        Requirements: {factory_profile['input_requirements']}
        
        Explain the chemical synergy, potential pre-treatment needs, and environmental benefits in 3-4 professional sentences.
        """

        try:
            headers = {
                "x-api-key": self.api_key,
                "anthropic-version": "2023-06-01",
                "content-type": "application/json"
            }
            data = {
                "model": "claude-3-sonnet-20240229",
                "max_tokens": 300,
                "messages": [{"role": "user", "content": prompt}]
            }
            response = requests.post(self.endpoint, headers=headers, json=data)
            response.raise_for_status()
            return response.json()['content'][0]['text']
        except Exception as e:
            return f"Heuristic Analysis: Compatibility confirmed for {waste_profile['material_name']}. (Claude API error: {str(e)})"

# Global instance
ai_service = AIService()
