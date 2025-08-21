// utils/gemini.js
import { GoogleGenAI } from "@google/genai";

// Automatically picks up from environment variable `GEMINI_API_KEY`
const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });

export default ai;