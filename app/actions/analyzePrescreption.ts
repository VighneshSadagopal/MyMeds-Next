"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function analyzePrescription(formData: FormData) {
  const file = formData.get("image") as File;

  if (!file) {
    throw new Error("No image uploaded");
  }

  // Convert image → base64
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64Image = buffer.toString("base64");

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `
You are a medical prescription parser.

Extract text from this prescription image and return ONLY valid JSON
(no markdown, no explanation).

Required format:
{
  "medicines": string[],
  "dosage": string[],
  "frequency": string[],
  "instructions": string[],
  "keywords": string[]
}
`;

  const result = await model.generateContent([
    prompt,
    {
      inlineData: {
        mimeType: file.type,
        data: base64Image,
      },
    },
  ]);

  const text = result.response.text();

  // Safety: extract JSON only
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Invalid Gemini response");
  }

  return JSON.parse(jsonMatch[0]);
}
