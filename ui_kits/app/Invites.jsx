// Invites.jsx
const INVITES = [
  { name: 'Obinna Umeh',  rel: 'Father',   tier: 'Verified', initials: 'OU' },
  { name: 'Adaeze Umeh',  rel: 'Mother',   tier: 'Basic',    initials: 'AU' },
  { name: 'Chinedu Umeh', rel: 'Brother',  tier: 'Basic',    initials: 'CU' },
  { name: 'Ifeoma Eze',   rel: 'Aunt',     tier: 'Verified', initials: 'IE' },
];

const Invites = () => {
  const [tab, setTab] = React.useState('pending');
  return (
    <div className="invites">
      <ScreenHeader title="Invites" right={
        <button className="icon-btn" aria-label="Filter">
          <span className="material-symbols-outlined">filter_list</span>
        </button>
      } />
      <div className="tabs">
        {['pending','sent'].map(t => (
          <button key={t}
            className={`tab ${tab===t?'is-active':''}`}
            onClick={() => setTab(t)}>
            {t === 'pending' ? 'Pending' : 'Sent'}
            <span className="tab__count">{t==='pending' ? INVITES.length : 2}</span>
          </button>
        ))}
      </div>
      <ul className="invite-list">
        {INVITES.map(i => (
          <li key={i.name} className="invite-row">
            <Avatar size={48} initials={i.initials} cream />
            <div className="invite-row__text">
              <div className="invite-row__name">{i.name}</div>
              <div className="invite-row__rel">{i.rel}</div>
            </div>
            <span className={`tier tier--${i.tier.toLowerCase()}`}>{i.tier}</span>
            <button className="icon-btn"><span className="material-symbols-outlined">keyboard_arrow_right</span></button>
          </li>
        ))}
      </ul>
    </div>
  );
};
window.Invites = Invites;
