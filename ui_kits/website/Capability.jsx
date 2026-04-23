// Capability.jsx — numbered capability rows with deliverables.
const CAPS = [
  { n: '001', name: 'Applied Research',       alt: "How we learn what's true",
    body: 'Most assumptions are wrong. We design lean experiments that expose which ones to kill early and which ones to build around.',
    deliv: ['Research brief', 'Findings report', 'Annotated codebase'], opt: 'Ongoing retainer' },
  { n: '002', name: 'AI Product Development', alt: 'Build the thing, actually',
    body: 'A focused, four-week build. We scope it, ship it, and hand it over. No retainer, no lock-in.',
    deliv: ['Production code', 'Deployment', 'Runbook'], opt: 'Post-launch support' },
  { n: '003', name: 'Enterprise AI Agents',   alt: 'Autonomy with adult supervision',
    body: 'Agents that do real work inside real systems. Observable, revertible, and boring in the best way.',
    deliv: ['Agent graph', 'Integrations', 'Evaluation harness'], opt: 'On-call engineering' },
  { n: '004', name: 'Data & AI Strategy',     alt: 'Where to play, what to skip',
    body: 'A clear-eyed view of what you should build, what you should buy, and what you should ignore.',
    deliv: ['Capability map', 'Roadmap', 'Buy/build memo'], opt: 'Board presentation' },
];

const Capability = () => (
  <section className="capabilities">
    <div className="eyebrow heat">CAPABILITIES</div>
    <h2 className="caps__h2">Ready to find out <em>what's true</em>?</h2>
    <div className="caps__list">
      {CAPS.map(c => (
        <article key={c.n} className="cap">
          <div className="cap__left">
            <div className="cap__num">{c.n}</div>
            <div className="cap__alt">{c.alt}</div>
          </div>
          <div className="cap__mid">
            <h3 className="cap__name">{c.name}</h3>
            <p className="cap__body">{c.body}</p>
          </div>
          <ul className="cap__deliv">
            {c.deliv.map(d => <li key={d}><span className="tick">✓</span>{d}</li>)}
            <li className="opt"><em>optional:</em> {c.opt}</li>
          </ul>
        </article>
      ))}
    </div>
  </section>
);
window.Capability = Capability;
