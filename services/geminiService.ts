
import { GoogleGenAI, Type } from "@google/genai";
import { SkillData, ForecastResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateSkillForecast = async (skill: SkillData): Promise<ForecastResponse> => {
  const prompt = `
    Perform a professional ML-style demand forecast for the skill: "${skill.name}".
    Context:
    - Current Demand Score (0-100): ${skill.currentDemand}
    - Recent Growth Rate: ${skill.growthRate}%
    - Top Industries: ${skill.topIndustries.join(', ')}
    - Description: ${skill.description}

    Based on global labor market trends, technological evolution, and industrial shifts, provide:
    1. A summary of why this skill is trending.
    2. A prediction (Rising, Stable, or Declining) for the next 3 years.
    3. Three specific reasons for this prediction.
    4. A 4-step learning roadmap to master this skill in the current market.
    5. An estimated numerical percentage growth for the next 3 years.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            predictedTrend: { type: Type.STRING, enum: ['Rising', 'Stable', 'Declining'] },
            reasons: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestedRoadmap: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            estimatedGrowthNext3Years: { type: Type.NUMBER }
          },
          required: ['summary', 'predictedTrend', 'reasons', 'suggestedRoadmap', 'estimatedGrowthNext3Years']
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result as ForecastResponse;
  } catch (error) {
    console.error("Forecasting Error:", error);
    throw error;
  }
};
