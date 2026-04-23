// ui.jsx — shared SoS primitives
const { useState } = React;

const SoSPhone = ({ children }) => {
  const now = new Date();
  const t = now.toLocaleTimeString([], { hour:'numeric', minute:'2-digit' }).replace(/\s?[AP]M/,'');
  return (
    <div className="sos-phone">
      <div className="sos-phone__bezel">
        <div className="sos-phone__notch" />
        <div className="sos-phone__statusbar">
          <span>{t}</span>
          <span className="material-symbols-outlined" style={{fontSize:16}}>signal_cellular_alt</span>
        </div>
        <div className="sos-phone__screen">{children}</div>
        <div className="sos-phone__home" />
      </div>
    </div>
  );
};

const SoSHeader = ({ title, onBack, right, avatar }) => (
  <div className="sos-header">
    {avatar ? (
      <div className="sos-header__avatar"><span className="material-symbols-outlined">person</span></div>
    ) : onBack ? (
      <button className="sos-header__back" onClick={onBack}>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
    ) : <div style={{width:24}} />}
    <div className="sos-header__title">{title}</div>
    {right || <div style={{width:24}} />}
  </div>
);

const TimeRange = ({ value='7D', onChange=()=>{} }) => {
  const opts = ['7D','30D','90D','Year','All'];
  return (
    <div className="sos-timerange">
      {opts.map(o => (
        <button key={o} onClick={()=>onChange(o)}
                className={'sos-timerange__pill ' + (o===value ? 'is-active' : '')}>{o}</button>
      ))}
    </div>
  );
};

const Metric = ({ icon, value, label, sm }) => (
  <div className={'sos-metric ' + (sm ? 'sos-metric--sm' : '')}>
    <div className="sos-metric__cap"><span className="material-symbols-outlined">{icon}</span></div>
    <div className="sos-metric__body">
      <span className="sos-metric__value">{value}</span>
      <span className="sos-metric__label">{label}</span>
    </div>
  </div>
);

const SeeMore = ({ tone='terra' }) => (
  <div style={{display:'flex', justifyContent:'flex-end', marginTop:8}}>
    <span className="sos-card__seemore" style={{color: tone==='terra' ? '#a1665e' : '#141414'}}>see more ›</span>
  </div>
);

const SoSBtn = ({ children, onClick, loading, tone='ink', sm }) => (
  <button className={`sos-btn sos-btn--${tone} ${sm?'sos-btn--sm':''}`} onClick={onClick} disabled={loading}>
    {loading && <div className="sos-spinner" />}
    {children}
  </button>
);

/* Donut as SVG with a single primary slice + remainder */
const Donut = ({ value, total=100, label, color='#058c8c' }) => {
  const r=60, c=2*Math.PI*r;
  const pct = value/total;
  return (
    <div className="sos-donut">
      <svg width="140" height="140" style={{position:'absolute', inset:0, transform:'rotate(-90deg)'}}>
        <circle cx="70" cy="70" r={r} fill="none" stroke="#e6f4f4" strokeWidth="14" />
        <circle cx="70" cy="70" r={r} fill="none" stroke={color} strokeWidth="14"
                strokeDasharray={`${c*pct} ${c}`} strokeLinecap="round" />
      </svg>
      <div className="sos-donut__hole">
        <div>
          <div className="sos-donut__value">{value}%</div>
          <div className="sos-donut__label">{label}</div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { SoSPhone, SoSHeader, TimeRange, Metric, SeeMore, SoSBtn, Donut });
