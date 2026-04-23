// Hero.jsx — big display headline + canvas moiré.
const Hero = () => {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr; canvas.height = r.height * dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
    };
    resize(); window.addEventListener('resize', resize);
    let t = 0, raf;
    const draw = () => {
      const r = canvas.getBoundingClientRect();
      ctx.clearRect(0,0,r.width,r.height);
      ctx.strokeStyle = 'rgba(5,140,140,0.22)';
      ctx.lineWidth = 1;
      const cx = r.width * 0.78, cy = r.height * 0.55;
      for (let i = 0; i < 42; i++) {
        const radius = 18 + i * 22 + Math.sin(t*0.6 + i*0.22) * 6;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI*2);
        ctx.stroke();
      }
      t += 0.01;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero__moire" />
      <div className="hero__inner">
        <div className="eyebrow">APPLIED AI FOR ENTERPRISES</div>
        <h1 className="hero__h1">
          Get AI working<br/>for you <span className="heat">today.</span>
        </h1>
        <p className="hero__lede">
          We go past proofs of concepts to AI products that actually work for you.
          <em> Really</em> useful, now.
        </p>
        <div className="hero__ctas">
          <a className="btn btn--ghost heat" href="#">ASSESS YOUR AI READINESS <span className="arrow"/></a>
          <a className="btn btn--link" href="#">Read our approach →</a>
        </div>
      </div>
    </section>
  );
};
window.Hero = Hero;
