import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const  {prompt}  = await req.json();
   
    
    const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
  
    return NextResponse.json(
      {
        ai: result.response.text(),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error || "Error occurred",
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      }
    );
  }
}
