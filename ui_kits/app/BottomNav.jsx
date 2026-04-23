// BottomNav.jsx
const TABS = [
  ['home',    'home',           'Home'],
  ['tree',    'account_tree',   'Tree'],
  ['invites', 'mail_outline',   'Invites'],
  ['account', 'person_outline', 'Account'],
];

const BottomNav = ({ tab, setTab }) => (
  <nav className="bottom-nav">
    {TABS.map(([k, icon, label]) => (
      <button key={k}
              className={`bottom-nav__item ${tab===k?'is-active':''}`}
              onClick={() => setTab(k)}>
        <span className="material-symbols-outlined">{icon}</span>
        <span className="bottom-nav__label">{label}</span>
      </button>
    ))}
  </nav>
);
window.BottomNav = BottomNav;
