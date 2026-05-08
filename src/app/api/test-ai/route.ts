import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function GET() {
  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: "Zeg hallo in drie talen: Nederlands, Engels en Braziliaans Portugees.",
      },
    ],
  });

  const text =
    message.content[0].type === "text" ? message.content[0].text : "";

  return Response.json({ success: true, response: text });
}