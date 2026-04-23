// Sense of Self — shared ui primitives
const SosIcon = ({name, size=20}) => <span className="material-symbols-outlined" style={{fontSize:size+'px'}}>{name}</span>;

const SosHeader = ({eyebrow, title, right}) => (
  <header className="sos-header">
    <div>
      <div className="sos-eyebrow">{eyebrow}</div>
      <h1 className="sos-title" dangerouslySetInnerHTML={{__html:title}} />
    </div>
    {right && <div className="sos-header__right">{right}</div>}
  </header>
);

const SosBtn = ({children, variant='primary', ...p}) => {
  const styles = {
    primary:   {background:'var(--sos-ink)', color:'#fff', border:'none'},
    secondary: {background:'transparent', color:'var(--sos-ink)', border:'1px solid var(--sos-ink)'},
    heat:      {background:'var(--sos-heat)', color:'#fff', border:'none'},
  };
  return <button className="sos-btn" style={styles[variant]} {...p}>{children}</button>;
};

Object.assign(window, { SosIcon, SosHeader, SosBtn });
