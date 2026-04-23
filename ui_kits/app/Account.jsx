// Account.jsx
const Account = ({ onLogout }) => (
  <div className="account">
    <ScreenHeader title="Account" right={null} />
    <div className="account__hero">
      <Avatar size={80} initials="NU" />
      <div>
        <div className="account__name">Nwamaka Umeh</div>
        <div className="account__handle">@nwamaka · Toronto</div>
        <span className="tier tier--verified" style={{marginTop:6}}>Verified</span>
      </div>
    </div>
    <ul className="settings-list">
      {[
        ['person',            'Personal details'],
        ['notifications_none','Notifications'],
        ['lock_outline',      'Privacy'],
        ['description',       'Stories & memories'],
        ['help_outline',      'Help & support'],
      ].map(([icon, label]) => (
        <li key={label} className="settings-row">
          <span className="material-symbols-outlined" style={{color:'#323232'}}>{icon}</span>
          <span className="settings-row__label">{label}</span>
          <span className="material-symbols-outlined" style={{color:'#939393'}}>keyboard_arrow_right</span>
        </li>
      ))}
    </ul>
    <div style={{padding:'0 20px'}}>
      <OutlinedButton onClick={onLogout} icon="logout">Sign out</OutlinedButton>
    </div>
  </div>
);
window.Account = Account;
