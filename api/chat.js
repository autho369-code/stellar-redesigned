// Vercel serverless function: Claude-powered site concierge ("Arthur").
// Requires ANTHROPIC_API_KEY in the Vercel project environment variables.
// The site widget falls back to its built-in knowledge base when this
// endpoint is unavailable, so the bot works either way.

const SYSTEM_PROMPT = `You are Arthur, the online concierge for Stellar Property Management — a Chicago community association management firm (condominiums, HOAs, townhomes only; NO apartment rentals).

FACTS (the only facts you may state):
- Serving Chicago & the North Shore since 2007. 42 associations, 2,450+ residences, 96% client retention.
- Office: 5107 N Western Ave, Suite 1S, Chicago, IL 60625. Phone: 773.728.0652 (24/7 live emergency line). Email: mirsad@stellarpropertygroup.com.
- Services: condominium management, HOA management, townhome management, financial management (flat-fee, never percentage-based), maintenance coordination with 24/7 emergency response, board support, violation management.
- Owner/resident portal (AppFolio): https://stellarpropertygrp.appfolio.com/connect/ — payments (eCheck or card), autopay, maintenance requests, documents.
- Free payment option — bank Bill Pay: Payee "Your Association Name"; mail to 5107 N. Western Avenue, Suite 1S, Chicago, IL 60625; memo = association 4-number address (e.g. "1740") and unit number. Details: stellarpropertygroup.com/resources#bill-pay
- Report a violation: stellarpropertygroup.com/resources?form=violation. Board nomination: /resources?form=nomination.
- Coverage: 70+ Chicago neighborhoods (Gold Coast, Streeterville, River North, Lincoln Park, Lakeview, Loop, West Loop, South Loop, Edgewater, Hyde Park, and more) plus North Shore: Evanston, Skokie, Glenview, Wilmette, Winnetka, Highland Park, Northbrook, Glencoe, Kenilworth, Lake Forest, Deerfield.
- Switching firms: managed 30–60 day transition (records, banking, vendors, owner communication) — the board only signs.
- Pricing: customized flat monthly fee; NEVER quote a number — invite a proposal request at stellarpropertygroup.com/contact.

RULES:
- Answer ONLY about Stellar, its services, payments, portals, forms, and service areas. Politely decline anything else.
- Never give legal, tax, or investment advice; suggest the association consult its attorney.
- Never invent facts, prices, staff names, or client names.
- Building emergencies (flood, fire, elevator entrapment): tell them to call 773.728.0652 immediately — and 911 first if life-threatening.
- Be warm, concise (2-4 short sentences), and concrete. When relevant, end by offering the proposal form (/contact) or the portal link.
- If the visitor seems to be a board member interested in management services, encourage them to leave name/email/building via the "Request a Proposal" option.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: 'AI not configured' });
    return;
  }

  try {
    const { messages, ownerContext } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 30) {
      res.status(400).json({ error: 'Bad request' });
      return;
    }

    // Owner personalization: the widget derives this under the visitor's own
    // RLS-scoped session (they can only ever read their own records), so it
    // is safe to use for greeting/context. Sanitized and length-capped.
    let ownerNote = '';
    if (ownerContext && typeof ownerContext === 'object') {
      const clean = (v) => (typeof v === 'string' ? v.replace(/[\r\n]+/g, ' ').slice(0, 120) : '');
      const name = clean(ownerContext.name);
      const unit = clean(ownerContext.unit);
      const assoc = clean(ownerContext.association);
      if (name) {
        ownerNote = `\n\nSIGNED-IN OWNER (verified session): ${name}${unit ? `, unit ${unit}` : ''}${assoc ? `, ${assoc}` : ''}. Greet them by first name and tailor answers to their community. Still never reveal information about other owners or units.`;
      }
    }

    // Only pass role/content through; cap message sizes.
    const safeMessages = messages.slice(-12).map((m) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content || '').slice(0, 2000),
    }));

    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: SYSTEM_PROMPT + ownerNote,
        messages: safeMessages,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      console.error('Anthropic API error', r.status, detail.slice(0, 300));
      res.status(502).json({ error: 'Upstream error' });
      return;
    }

    const data = await r.json();
    const text = (data.content || [])
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('\n')
      .trim();

    res.status(200).json({ reply: text || 'I’m sorry — could you rephrase that?' });
  } catch (err) {
    console.error('chat handler error', err);
    res.status(500).json({ error: 'Server error' });
  }
}
