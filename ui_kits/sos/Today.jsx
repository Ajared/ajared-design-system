const Today = ({onReflect}) => {
  const days = ['M','T','W','T','F','S','S'];
  const done = [true,true,true,true,false,false,false]; // today = Fri (idx 4)
  const [mood, setMood] = React.useState('quiet');
  const moods = [
    {id:'tender',  label:'Tender',   dot:'#a1665e'},
    {id:'quiet',   label:'Quiet',    dot:'#058c8c'},
    {id:'restless',label:'Restless', dot:'#c85a5a'},
    {id:'grateful',label:'Grateful', dot:'#5e8c3a'},
    {id:'tired',   label:'Tired',    dot:'#6b6b6b'},
    {id:'clear',   label:'Clear',    dot:'#023b3b'},
  ];
  return (
    <div className="today">
      <SosHeader
        eyebrow="FRI · 28 MAR · DAY 046"
        title="Good morning,<br/>Chu."
        right={<button className="sos-icon-btn"><SosIcon name="settings" /></button>}
      />

      <div className="streak">
        <div className="streak__label">This week</div>
        <div className="streak__row">
          {days.map((d,k)=>(
            <div key={k} className={'streak__day'+(done[k]?' is-done':'')+(k===4?' is-today':'')}>
              <span className="streak__dot" />
              <span className="streak__letter">{d}</span>
            </div>
          ))}
        </div>
        <div className="streak__meta">4 of 7 · current streak <span className="heat">11 days</span></div>
      </div>

      <div className="prompt-card">
        <div className="sos-eyebrow">TODAY'S PROMPT</div>
        <div className="prompt-card__q">What did you <em>notice</em> this week that nobody else seemed to?</div>
        <p className="prompt-card__hint">Write for five minutes. No editing. The point is not to be clever — it's to be honest.</p>
        <SosBtn onClick={onReflect}>Begin reflection →</SosBtn>
      </div>

      <div className="mood">
        <div className="sos-eyebrow">ONE WORD FOR TODAY</div>
        <div className="mood__row">
          {moods.map(m=>(
            <button key={m.id} className={'mood__pill'+(mood===m.id?' is-active':'')} onClick={()=>setMood(m.id)}>
              <span className="sos-mood-dot" style={{background:m.dot}} />
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="today__footnote">
        <span className="coords-mono">43.6532°N · 79.3832°W</span>
        <span className="coords-mono">7°C · light rain · sunrise 07:12</span>
      </div>
    </div>
  );
};
window.Today = Today;
