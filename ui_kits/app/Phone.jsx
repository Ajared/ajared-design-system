// Phone.jsx — mobile bezel + status bar + home indicator
const Phone = ({ children }) => (
  <div className="phone">
    <div className="phone__bezel">
      <div className="phone__notch" />
      <div className="phone__statusbar">
        <span className="phone__time">9:41</span>
        <div className="phone__icons">
          <span className="material-symbols-outlined" style={{fontSize:15}}>signal_cellular_alt</span>
          <span className="material-symbols-outlined" style={{fontSize:15}}>wifi</span>
          <span className="material-symbols-outlined" style={{fontSize:15}}>battery_full</span>
        </div>
      </div>
      <div className="phone__screen">{children}</div>
      <div className="phone__home" />
    </div>
  </div>
);
window.Phone = Phone;
