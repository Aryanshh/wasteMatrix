const BASE_URL = 'http://localhost:8000';

/**
 * WasteMatrix Neural API Bridge
 * This service handles all communication between the React Frontend 
 * and the FastAPI Matching Engine.
 */
export const wasteApi = {
  // 1. Fetch live matches from the synergy engine
  getMatches: async () => {
    try {
      const response = await fetch(`${BASE_URL}/matches`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("API Error: Fetching matches failed", error);
      return null;
    }
  },

  // 2. Upload material fingerprints for AI analysis
  uploadMaterial: async (materialData) => {
    try {
      const response = await fetch(`${BASE_URL}/upload`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(materialData),
      });
      return await response.json();
    } catch (error) {
      console.error("API Error: Material upload failed", error);
      return { status: "error", message: "Link to server failed" };
    }
  },

  // 3. Initiate Supply Agreement via Neural Link
  initiateAgreement: async (matchId) => {
    try {
      const response = await fetch(`${BASE_URL}/negotiate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ match_id: matchId }),
      });
      return await response.json();
    } catch (error) {
      console.error("API Error: Negotiation failed", error);
      return { status: "error" };
    }
  }
};
