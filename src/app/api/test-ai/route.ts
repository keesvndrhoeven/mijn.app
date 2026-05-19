import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `Je bent Solutie, de virtuele assistent van HoevenSolutions.

Je bent vriendelijk, professioneel en behulpzaam. Je antwoordt altijd in het Nederlands.

De diensten van HoevenSolutions zijn:
- AI-automatisering voor MKB
- Offerte-systemen
- Chatbots
- Website-analyse

Als iemand vraagt naar iets wat buiten deze diensten valt of wat je niet weet, zeg je altijd:
"Daar kan ik je niet mee helpen. Neem contact op via hoevensolutions.nl/contact"

Houd je antwoorden kort en to the point.`;

export async function POST(request: Request) {
  const { message } = await request.json();

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { success: false, error: "ANTHROPIC_API_KEY is not set" },
      { status: 500 }
    );
  }

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  return Response.json({ success: true, response: text });
}
