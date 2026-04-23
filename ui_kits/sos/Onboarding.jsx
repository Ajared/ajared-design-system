const Onboarding = ({onDone}) => {
  const steps = [
    {eye:'01 / 03 — Welcome', title:'Your days, remembered\nin your own words.', lede:'A private journal that asks better questions. Ten minutes a day is enough to see the shape of a life.'},
    {eye:'02 / 03 — Method',  title:'A prompt.\nA paragraph.\nA pattern.',          lede:'Sense of Self uses gentle daily prompts — crafted from reflective-writing research — to surface what actually matters to you.'},
    {eye:'03 / 03 — Privacy', title:'Only you ever\nread these pages.',             lede:'Your entries are encrypted end-to-end on your device. No ads, no AI training, no analytics.'},
  ];
  const [i, setI] = React.useState(0);
  const s = steps[i];
  return (
    <div className="onb">
      <div className="onb__dots">{steps.map((_,k)=><div key={k} className={'onb__dot'+(k<=i?' is-active':'')} />)}</div>
      <div className="onb__body">
        <div className="sos-eyebrow">{s.eye}</div>
        <h1 className="onb__title">{s.title}</h1>
        <p className="onb__lede">{s.lede}</p>
      </div>
      <div className="onb__footer">
        <button className="onb__skip" onClick={onDone}>Skip</button>
        <SosBtn onClick={()=> i<steps.length-1 ? setI(i+1) : onDone()}>
          {i<steps.length-1 ? 'Continue' : 'Begin'}
        </SosBtn>
      </div>
    </div>
  );
};
window.Onboarding = Onboarding;
