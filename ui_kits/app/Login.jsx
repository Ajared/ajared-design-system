// Login.jsx
const Login = ({ onLogin }) => {
  const [phone, setPhone] = React.useState('');
  return (
    <div className="login">
      <div className="login__head">
        <h1 className="login__title">Welcome Back</h1>
        <p className="login__sub">Continue growing your tree!</p>
      </div>
      <div className="login__form">
        <Field label="Phone Number" value={phone} onChange={setPhone}
               placeholder="+1 (555) 123-4567" icon="phone_iphone" />
        <FilledButton onClick={onLogin} tone="terra">Continue</FilledButton>
      </div>
      <div className="login__divider">
        <span>OR continue with</span>
      </div>
      <div className="login__socials">
        <button className="ui-social">
          <span style={{fontSize:20, color:'#593834'}}>f</span> Facebook
        </button>
        <button className="ui-social">
          <span style={{fontSize:16, fontWeight:700, color:'#593834'}}>in</span> LinkedIn
        </button>
      </div>
      <div className="login__footer">
        Don't have an account? <a href="#" onClick={e=>{e.preventDefault();onLogin();}}>Sign up</a>
      </div>
    </div>
  );
};
window.Login = Login;
