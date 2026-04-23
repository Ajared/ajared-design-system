// ContactBlock.jsx — dark-teal CTA with blinking status light.
const ContactBlock = () => {
  const [sent, setSent] = React.useState(false);
  return (
    <section className="contact">
      <div className="contact__left">
        <span className="eyebrow" style={{color: '#8ccaca'}}>GET IN TOUCH</span>
        <h2 className="contact__h2">Early failure is cheap.<br/>Late failure is not.</h2>
        <p className="contact__lede">
          Tell us what you're trying to do. We'll tell you whether AI is the right tool — even if the answer is no.
        </p>
        <div className="contact__status">
          <span className="status-dot" /> <span>Accepting new engagements · Q2 2026</span>
        </div>
      </div>
      <form className="contact__form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
        <label className="field">
          <span className="field__label">NAME</span>
          <input className="field__input" type="text" placeholder="Your name"/>
        </label>
        <label className="field">
          <span className="field__label">EMAIL</span>
          <input className="field__input" type="email" placeholder="you@company.com"/>
        </label>
        <label className="field">
          <span className="field__label">WHAT ARE YOU TRYING TO DO?</span>
          <textarea className="field__input field__textarea" rows={3} placeholder="One or two sentences is fine."/>
        </label>
        <button className="btn btn--solid" type="submit">
          {sent ? "SENT — WE'LL BE IN TOUCH" : 'SEND →'}
        </button>
      </form>
    </section>
  );
};
window.ContactBlock = ContactBlock;
