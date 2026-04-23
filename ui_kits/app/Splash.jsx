// Splash.jsx
const Splash = ({ onContinue }) => {
  React.useEffect(() => {
    const t = setTimeout(() => onContinue(), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="splash" onClick={onContinue}>
      <div className="splash__logo">
        <div className="splash__avatar">
          <span className="material-symbols-outlined" style={{fontSize:44}}>account_tree</span>
        </div>
        <div className="splash__title">Family Tree</div>
      </div>
      <div className="splash__sub">Connect your relatives, preserve their stories</div>
      <div className="splash__footer">Powered by aja<span style={{fontWeight:700}}>RED</span>.</div>
    </div>
  );
};
window.Splash = Splash;
