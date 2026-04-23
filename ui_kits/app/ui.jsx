// ui.jsx — shared primitives
const FilledButton = ({ children, onClick, full = true, tone = 'ink' }) => {
  const bg = tone === 'terra' ? '#593834' : tone === 'teal' ? '#058c8c' : '#141414';
  return (
    <button className="ui-btn ui-btn--filled" onClick={onClick}
            style={{ background: bg, width: full ? '100%' : 'auto' }}>
      {children}
    </button>
  );
};

const OutlinedButton = ({ children, onClick, icon }) => (
  <button className="ui-btn ui-btn--outlined" onClick={onClick}>
    {icon && <span className="material-symbols-outlined" style={{fontSize:20, marginRight:8}}>{icon}</span>}
    {children}
  </button>
);

const Field = ({ label, value, onChange, type='text', placeholder, icon }) => (
  <label className="ui-field">
    <span className="ui-field__label">{label}</span>
    <div className="ui-field__box">
      {icon && <span className="material-symbols-outlined" style={{fontSize:18, color:'#626262', marginRight:8}}>{icon}</span>}
      <input className="ui-field__input" type={type} value={value || ''} placeholder={placeholder}
             onChange={e => onChange && onChange(e.target.value)} />
    </div>
  </label>
);

const Avatar = ({ size = 56, initials, cream = true, outlined = true }) => (
  <div className="ui-avatar" style={{
    width: size, height: size,
    background: cream ? '#F7EBC6' : '#d9d9d9',
    border: outlined ? '3px solid #000' : 'none',
    fontSize: size * 0.36,
  }}>
    {initials ? initials : <span className="material-symbols-outlined" style={{fontSize: size*0.5, color:'#000'}}>person</span>}
  </div>
);

const ScreenHeader = ({ title, right }) => (
  <div className="screen-header">
    <h1 className="screen-header__title">{title}</h1>
    <div className="screen-header__right">{right}</div>
  </div>
);

Object.assign(window, { FilledButton, OutlinedButton, Field, Avatar, ScreenHeader });
