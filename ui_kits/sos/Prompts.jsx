const Prompts = ({onPick}) => {
  const themes = ['All','Values','Grief','Craft','Relationships','Work'];
  const [theme, setTheme] = React.useState('All');
  const rows = [
    {t:'What did you notice this week that nobody else seemed to?', m:'5 MIN · NOTICING'},
    {t:'Describe a compliment you brushed off. Why?',               m:'3 MIN · SELF-IMAGE'},
    {t:'Where are you being asked to be smaller than you are?',     m:'7 MIN · VALUES'},
    {t:'What would you attempt if you believed you were good at it?',m:'5 MIN · CRAFT'},
    {t:'Who have you not texted back, and what is that about?',     m:'3 MIN · RELATIONSHIPS'},
    {t:"Describe the last time you felt fully, specifically alive.", m:'7 MIN · AWE'},
    {t:'What have you been calling a problem that is actually a choice?', m:'5 MIN · AGENCY'},
    {t:'Write the sentence you\u2019ve been avoiding.',             m:'OPEN · HONESTY'},
  ];
  return (
    <div className="prompts">
      <SosHeader eyebrow="PROMPT LIBRARY" title="142 questions<br/>to sit with." />
      <div className="prompts__theme">
        <div style={{display:'flex', gap:8, overflowX:'auto', marginTop:8}}>
          {themes.map(t=>(
            <button key={t} className={'sos-chip'+(theme===t?' is-active':'')} onClick={()=>setTheme(t)}>{t}</button>
          ))}
        </div>
        <ul className="prompts__list">
          {rows.map((r,i)=>(
            <li key={i} className="prompts__row" onClick={onPick}>
              <div>
                <div style={{fontFamily:'var(--font-primary)', fontWeight:700, fontSize:16, letterSpacing:'-0.01em', lineHeight:1.25, marginBottom:4}}>{r.t}</div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:10, color:'var(--sos-mute)', letterSpacing:'0.06em'}}>{r.m}</div>
              </div>
              <SosIcon name="arrow_forward" size={18} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
window.Prompts = Prompts;
