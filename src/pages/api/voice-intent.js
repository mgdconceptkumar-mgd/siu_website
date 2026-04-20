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
      Your task is to match the user's voice transcript to one of the website sections.
      
      Available Sections:
      - "#hero": Home, top of the page, hero section, start.
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
      - "toggleLanguage": Use this ONLY if the user asks to change language, translate to Arabic, switch to English, etc.

      Transcript: "${transcript}"
      Language: ${currentLanguage || 'en'}

      Respond with a JSON object containing:
      1. "section": The section ID or path (or null if no match).
      2. "action": The action string (or null if no match).
      3. "response": A short, friendly confirmation message in the user's language (${currentLanguage || 'en'}).
      4. "confidence": A number between 0 and 1.

      Example for navigation:
      { "section": "#universities", "action": null, "response": "Sure, taking you to our partner universities.", "confidence": 0.95 }

      Example for language toggle:
      { "section": null, "action": "toggleLanguage", "response": "Certainly! Switching language for you.", "confidence": 1.0 }
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
