import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { transcript, currentLanguage } = req.body;

  if (!transcript) {
    return res.status(400).json({ message: 'Transcript is required' });
  }

  try {
    const prompt = `
      You are a navigation assistant for the "Study in UAE" (SIU) website.
      Your task is to match the user's voice transcript to one of the website sections or actions.
      
      Available Sections:
      - "#hero": Home, top, start.
      - "#ecosystem": Ecosystem, network, partners, community.
      - "#process": How it works, process, application steps, timeline.
      - "#for-parents": Parents, families, guardian information, for guardians.
      - "#download-app": App download, mobile app, install, get the app.
      - "#universities": Universities, colleges, institutions, explore schools, search university.
      - "#testimonials": Student reviews, what people say, success stories, feedback.
      - "#faq": Frequently asked questions, help, support, common questions.
      - "#cta": Get started, contact us, closing, apply now.
      - "#footer": Address, location, where are you, contact details.
      - "/siu/about": About us page, our story (This is a page route, not an anchor).

      Available Actions:
      - "toggleLanguage": Use this ONLY if the user explicitly asks to change/switch/toggle language.

      Transcript: "${transcript}"
      Language: ${currentLanguage || 'en'}

      Respond with a JSON object containing:
      1. "section": The section ID (or null).
      2. "action": The action string (or null).
      3. "response": A friendly confirmation message in the user's language (${currentLanguage || 'en'}).
      4. "confidence": A number between 0 and 1.
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
    });

    const result = JSON.parse(response.choices[0].message.content);
    return res.status(200).json(result);
  } catch (error) {
    console.error('OpenAI Error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
