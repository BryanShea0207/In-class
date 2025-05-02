const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
import { rest } from "./myFetch"

export async function askGemini(prompt: string): Promise<string>{
    const modelName = "gemini-2.0-flash"
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GOOGLE_API_KEY}`
    const response = await rest<any>(url, {
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ]
    })

    return response?.candidates[0].content.parts[0].text
}