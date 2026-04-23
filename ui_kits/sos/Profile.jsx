const Profile = ({onLogout}) => {
  const tags = ['Patient','Plainspoken','Building things','Slow to anger','Quick to laugh','Father','Toronto'];
  const values = [
    {n:'01', t:'Make things that feel honest.',            s:'Even if that means fewer things.'},
    {n:'02', t:'Be the person my daughter watches work.',  s:'This is the measure.'},
    {n:'03', t:'Choose the longer conversation.',          s:'Especially when it\u2019s hard.'},
  ];
  const sliders = [
    {l:'INTROVERT', r:'EXTROVERT', pos:32},
    {l:'PLANNED',   r:'SPONTANEOUS', pos:58},
    {l:'SOLITUDE',  r:'TOGETHER',   pos:44},
    {l:'STEADY',    r:'RESTLESS',   pos:62},
  ];
  return (
    <div className="profile">
      <SosHeader eyebrow="WHO YOU'RE BECOMING" title="A draft of<br/><em>yourself.</em>" />

      <div className="profile__section">
        <div className="sos-eyebrow">WORDS YOU'VE USED ABOUT YOURSELF</div>
        <div className="profile__tags">
          {tags.map(t=><span key={t} className="profile__tag">{t}</span>)}
        </div>
      </div>

      <div className="profile__section">
        <div className="sos-eyebrow">VALUES · COMMITTED 12 MAR</div>
        <ul className="profile__values">
          {values.map(v=>(
            <li key={v.n}>
              <span className="profile__n">{v.n}</span>
              <div>
                <div>{v.t}</div>
                <em>{v.s}</em>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="profile__section">
        <div className="sos-eyebrow">HOW YOU'VE BEEN SHOWING UP</div>
        <ul className="sliders">
          {sliders.map((s,i)=>(
            <li key={i} className="slider">
              <span className="slider__l">{s.l}</span>
              <div className="slider__track"><span className="slider__mark" style={{left:s.pos+'%'}} /></div>
              <span>{s.r}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="profile__section" style={{display:'flex', gap:8}}>
        <SosBtn variant="secondary" style={{flex:1}}>Export my pages</SosBtn>
        <SosBtn variant="secondary" style={{flex:1}} onClick={onLogout}>Log out</SosBtn>
      </div>
    </div>
  );
};
window.Profile = Profile;
