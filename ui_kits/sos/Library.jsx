const Library = () => {
  const entries = [
    {date:'28 MAR', title:'I noticed the quiet way Maya checks in before hard conversations.', tags:'NOTICING · TENDER · 214w'},
    {date:'27 MAR', title:'The compliment about my writing landed, and it scared me.',           tags:'SELF-IMAGE · QUIET · 186w'},
    {date:'25 MAR', title:'Being smaller than myself at the client meeting, again.',             tags:'VALUES · RESTLESS · 312w'},
    {date:'24 MAR', title:'What I would attempt if I believed.',                                  tags:'CRAFT · CLEAR · 401w'},
    {date:'22 MAR', title:'Who I owe a text and what that means.',                                tags:'RELATIONSHIPS · TIRED · 98w'},
    {date:'20 MAR', title:'A specific Tuesday afternoon I\u2019ll miss.',                        tags:'AWE · GRATEFUL · 276w'},
  ];
  // ruler — 12 marks, today highlighted
  const ticks = Array.from({length:13},(_,i)=>i);
  return (
    <div className="library">
      <SosHeader eyebrow="46 ENTRIES · 14,210 WORDS" title="A record<br/>of you." />
      <div className="library__index">
        <div className="library__ruler">
          {ticks.map(i=>{
            const top = (i/12)*100;
            const isHeat = i===2;
            return (
              <div key={i} className="library__rtick" style={{top: top+'%'}}>
                <span className={'library__rmark major'+(isHeat?' heat':'')} />
                <span className={'library__rnum'+(isHeat?' heat':'')}>{String(28-i*2).padStart(2,'0')}.03</span>
              </div>
            );
          })}
        </div>
        <ul className="library__list">
          {entries.map((e,i)=>(
            <li key={i} className="library__row">
              <span className="library__date">{e.date}</span>
              <div>
                <div className="library__title">{e.title}</div>
                <div className="library__meta">{e.tags}</div>
              </div>
              <SosIcon name="chevron_right" size={18} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
window.Library = Library;
