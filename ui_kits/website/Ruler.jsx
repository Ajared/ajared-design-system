// Ruler.jsx — left-column ruler marginalia. Signature element.
const Ruler = ({ max = 600 }) => {
  const ticks = [];
  for (let i = 0; i <= max; i += 20) {
    const isMajor = i % 100 === 0;
    const isHeat  = i % 500 === 0 && i !== 0;
    ticks.push(
      <div key={i} className="ruler-tick" style={{ top: i }}>
        <span className={`ruler-mark ${isMajor ? 'major' : ''} ${isHeat ? 'heat' : ''}`} />
        {isMajor && <span className={`ruler-num ${isHeat ? 'heat' : ''}`}>{String(i).padStart(3, '0')}</span>}
      </div>
    );
  }
  return <aside className="ruler" aria-hidden="true">{ticks}</aside>;
};
window.Ruler = Ruler;
