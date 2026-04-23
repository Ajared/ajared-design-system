// OfferCards.jsx — 2x2 grid of numbered offers. Flip-to-teal on hover.
const OFFERS = [
  { n: '01', label: 'ADVISORY', title: 'Talk to a human about AI',
    body: 'Not a chatbot or a vendor pitch. A 30-minute conversation with an AI practitioner.',
    cta: 'Book a call' },
  { n: '02', label: 'BUILD', title: 'A focused, time-boxed build',
    body: 'We scope it, ship it, and hand it over in four weeks. No retainer, no lock-in.',
    cta: 'See the process' },
  { n: '03', label: 'LEARN', title: 'Workshop your readiness',
    body: 'A half-day working session with your team — we audit what you have and what to build next.',
    cta: 'Request a workshop' },
  { n: '04', label: 'AI SEARCH', title: 'Answer questions over your own data',
    body: 'A private search product for your documents — deployed in two weeks, on your infrastructure.',
    cta: 'Try it' },
];

const OfferCards = () => (
  <section className="offers">
    <div className="offers__header">
      <span className="eyebrow heat">WHAT WE DO</span>
      <h2 className="offers__h2">Four ways to start.</h2>
    </div>
    <div className="offers__grid">
      {OFFERS.map(o => (
        <a key={o.n} href="#" className="offer">
          <div className="offer__top">
            <span className="offer__num">{o.n}</span>
            <span className="offer__label">{o.label}</span>
          </div>
          <h3 className="offer__title">{o.title}</h3>
          <p className="offer__body">{o.body}</p>
          <span className="offer__cta">{o.cta} <span className="arrow"/></span>
        </a>
      ))}
    </div>
  </section>
);
window.OfferCards = OfferCards;
