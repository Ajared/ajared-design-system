const SosNav = ({tab, setTab}) => {
  const items = [
    {id:'today',   icon:'today',      label:'Today'},
    {id:'prompts', icon:'auto_stories',label:'Prompts'},
    {id:'library', icon:'menu_book',  label:'Library'},
    {id:'profile', icon:'account_circle',label:'Self'},
  ];
  return (
    <nav className="sos-nav">
      {items.map(i=>(
        <button key={i.id} className={'sos-nav__item'+(tab===i.id?' is-active':'')} onClick={()=>setTab(i.id)}>
          <SosIcon name={i.icon} size={24} />
          <span>{i.label}</span>
        </button>
      ))}
    </nav>
  );
};
window.SosNav = SosNav;
