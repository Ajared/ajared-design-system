// Tree.jsx — empty-tree view
const Tree = () => (
  <div className="tree">
    <ScreenHeader title="Tree" right={
      <>
        <button className="icon-btn" aria-label="Share">
          <span className="material-symbols-outlined">share</span>
        </button>
        <div className="tree__me">
          <Avatar size={44} />
        </div>
      </>
    } />

    <div className="alert-info">
      <span className="material-symbols-outlined" style={{color:'#058c8c'}}>info</span>
      <div>
        <div className="alert-info__title">It's Just You?</div>
        <div className="alert-info__body">Add family connections to keep growing your tree.</div>
      </div>
      <button className="icon-btn alert-info__close" aria-label="Dismiss">
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>

    <div className="tree__canvas">
      <svg className="tree__line" viewBox="0 0 94 40" preserveAspectRatio="none">
        <line x1="47" y1="0" x2="47" y2="40" stroke="#000" strokeWidth="1"/>
      </svg>
      <div className="tree-card">
        <Avatar size={56} />
        <div className="tree-card__name">Nwamaka Umeh</div>
        <div className="tree-card__tag">You</div>
      </div>
      <div className="tree__hint">Tap + to add a parent, sibling or child</div>
    </div>

    <button className="fab" aria-label="Add family member">
      <span className="material-symbols-outlined" style={{fontSize:28, color:'#fff'}}>add</span>
    </button>
  </div>
);
window.Tree = Tree;
