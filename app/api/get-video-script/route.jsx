import { NextResponse } from "next/server";
import { chatSession } from "../../../config/AiModel";

export async function POST(req) {
    try {
        const { prompt } = await req.json();
        console.log("Received prompt:", prompt);

        const result = await chatSession.sendMessage(prompt);
        const responseText = await result.response.text();
        console.log("AI Response:", responseText);

        // Ensure the response is valid JSON
        const parsedResponse = JSON.parse(responseText);

        return NextResponse.json({ result: parsedResponse });
    } catch (e) {
        console.error('API Error:', e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}