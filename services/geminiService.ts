
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function analyzeProject(projectDescription: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyse ce projet de communication et propose une stratégie succincte en 3 points (Audit, Création, Diffusion). Projet: ${projectDescription}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            audit: { type: Type.STRING, description: "Analyse de la situation actuelle." },
            creation: { type: Type.STRING, description: "Concept créatif suggéré." },
            diffusion: { type: Type.STRING, description: "Canaux de diffusion recommandés." },
            potentialScore: { type: Type.NUMBER, description: "Score d'impact potentiel de 1 à 10." }
          },
          required: ["audit", "creation", "diffusion", "potentialScore"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Erreur Gemini:", error);
    throw error;
  }
}
