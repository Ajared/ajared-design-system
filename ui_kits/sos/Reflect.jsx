const Reflect = ({onBack, onSave}) => {
  const [text, setText] = React.useState('');
  const [mood, setMood] = React.useState('quiet');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const target = 120;
  const pct = Math.min(100, Math.round(words/target*100));
  const moods = [
    {id:'tender',  label:'Tender',   dot:'#a1665e'},
    {id:'quiet',   label:'Quiet',    dot:'#058c8c'},
    {id:'restless',label:'Restless', dot:'#c85a5a'},
    {id:'grateful',label:'Grateful', dot:'#5e8c3a'},
  ];
  return (
    <div className="reflect">
      <div className="reflect__top">
        <button className="reflect__back" onClick={onBack}>← Close</button>
        <span className="coords-mono" style={{color:'var(--sos-mute)'}}>{words} words</span>
        <button className="reflect__save" onClick={onSave} style={{color: words>0?'var(--sos-heat)':'var(--sos-mute)'}}>Save</button>
      </div>
      <div className="sos-eyebrow">TODAY'S PROMPT</div>
      <h2 className="reflect__q">What did you <em>notice</em> this week that nobody else seemed to?</h2>
      <textarea
        className="reflect__input"
        placeholder="Start anywhere. The cursor is patient."
        value={text} onChange={e=>setText(e.target.value)} autoFocus
      />
      <div className="reflect__meter">
        <span className="reflect__meter-num">0</span>
        <div className="reflect__meter-bar"><span style={{width:pct+'%'}} /></div>
        <span className="reflect__meter-num">{target}</span>
      </div>
      <div className="reflect__mood">
        <div className="sos-eyebrow">HOW DID THIS LAND?</div>
        <div className="mood__row" style={{marginTop:10}}>
          {moods.map(m=>(
            <button key={m.id} className={'mood__pill'+(mood===m.id?' is-active':'')} onClick={()=>setMood(m.id)}>
              <span className="sos-mood-dot" style={{background:m.dot}} />
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
window.Reflect = Reflect;
