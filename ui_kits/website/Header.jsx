// Header.jsx — sticky top bar.
const Header = ({ route, setRoute }) => {
  const nav = [
    ['home',         'Home'],
    ['capabilities', 'Capabilities'],
    ['work',         'Work'],
    ['contact',      'Contact'],
  ];
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <a href="#" onClick={e => { e.preventDefault(); setRoute('home'); }} className="wordmark">
          aja<span className="heat">Red</span>
        </a>
        <span className="coords">
          Toronto 43.6332° N, 79.4141° W&nbsp;&nbsp;·&nbsp;&nbsp;Abuja 8.9976° N, 7.4674° E
        </span>
      </div>
      <nav className="site-header__nav">
        {nav.map(([k, label]) => (
          <a key={k} href="#"
             onClick={e => { e.preventDefault(); setRoute(k); }}
             className={`nav-link ${route === k ? 'is-active' : ''}`}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};
window.Header = Header;
