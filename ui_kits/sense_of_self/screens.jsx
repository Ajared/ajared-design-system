// Sense of Self — all screens. Loaded after ui.jsx.

/* --------------------------------------------------------------
   01. LANDING — public marketing screen, reachable before auth.
   -------------------------------------------------------------- */
const SoSLanding = ({ onStart }) => (
  <div className="sos-screen sos-screen--landing">
    <div className="sos-landing__hero">
      <span className="sos-landing__eyebrow">A SENSE OF SELF</span>
      <h1 className="sos-landing__headline">
        Meet the version of you that lives <em>online.</em>
      </h1>
      <p className="sos-landing__lede">
        We read your posts, replies, and rhythms on X and show you the patterns
        nobody — including you — has noticed yet.
      </p>
    </div>

    <div className="sos-section-label" style={{marginBottom:12}}>What you'll see</div>
    <div className="sos-landing__feature-row" style={{marginBottom:12}}>
      <div className="sos-landing__feature">
        <div className="sos-landing__feature-title">Your habits</div>
        <div className="sos-landing__feature-body">When you post, what you avoid, who you respond to.</div>
      </div>
      <div className="sos-landing__feature">
        <div className="sos-landing__feature-title">Your voice</div>
        <div className="sos-landing__feature-body">Sentiment, topics, vocabulary — mapped over time.</div>
      </div>
    </div>
    <div className="sos-landing__feature-row">
      <div className="sos-landing__feature">
        <div className="sos-landing__feature-title">Your audience</div>
        <div className="sos-landing__feature-body">How others engage: likes, replies, mentions.</div>
      </div>
      <div className="sos-landing__feature">
        <div className="sos-landing__feature-title">Your patterns</div>
        <div className="sos-landing__feature-body">Peak days, peak hours, streaks, silences.</div>
      </div>
    </div>

    <div className="sos-cta">
      <h2 className="sos-cta__title">Ready to discover your unique self?</h2>
      <p className="sos-cta__sub">Connect your X account and get insights in seconds.</p>
      <SoSBtn sm tone="ink" onClick={onStart}>Start Now</SoSBtn>
    </div>

    <div style={{padding:'0 24px 32px', textAlign:'center', fontSize:11, color:'#939393'}}>
      Built by Ajared Research Inc. · Your data stays yours.
    </div>
  </div>
);

/* --------------------------------------------------------------
   02. SIGNUP — connect X prompt
   03. SIGNUP LOADING — same screen, spinner state
   -------------------------------------------------------------- */
const SoSSignup = ({ onConnect, loading }) => (
  <div className="sos-screen sos-screen--auth">
    <div className="sos-auth">
      <p className="sos-auth__eyebrow" style={{color:loading?'#046363':'#141414'}}>Sense of Self</p>
      <h1 className="sos-auth__title">Connect Your X Account</h1>
      <p className="sos-auth__body">
        We'll analyze your posts, interactions, and patterns to generate your personal insights.
      </p>
      <SoSBtn tone="ink" loading={loading} onClick={onConnect}>
        {loading ? 'Connecting with X…' : 'Connect with X'}
      </SoSBtn>
      <p style={{fontSize:11, color:'#939393', marginTop:16, lineHeight:1.5}}>
        Read-only access. Disconnect anytime in Settings.
      </p>
    </div>
  </div>
);

/* --------------------------------------------------------------
   04. LOGIN — returning users
   -------------------------------------------------------------- */
const SoSLogin = ({ onLogin }) => (
  <div className="sos-screen sos-screen--auth">
    <div className="sos-auth">
      <p className="sos-auth__eyebrow">Sense of Self</p>
      <h1 className="sos-auth__title">Welcome Back</h1>
      <p className="sos-auth__body">
        Pick up where you left off and explore your latest insights.
      </p>
      <SoSBtn tone="ink" onClick={onLogin}>Continue with X</SoSBtn>
    </div>
  </div>
);

/* --------------------------------------------------------------
   05. HOME — dashboard
   -------------------------------------------------------------- */
const SoSHome = ({ go }) => {
  const [range, setRange] = useState('7D');
  return (
    <div className="sos-screen">
      <SoSHeader title="Home" avatar />
      <TimeRange value={range} onChange={setRange} />

      {/* Profile Summary */}
      <div className="sos-card" onClick={()=>go('profile')}>
        <div className="sos-card__title">Profile Summary</div>
        <p className="sos-card__body">
          You tend to engage thoughtfully, respond often to others and express emotion selectively…
        </p>
        <SeeMore />
      </div>

      {/* Habits */}
      <div className="sos-card" onClick={()=>go('habits')}>
        <div className="sos-card__title">Habits</div>
        <p className="sos-card__body">You tweet most often on Sundays…</p>
        <p className="sos-card__body">You're most active late at night…</p>
        <SeeMore />
      </div>

      {/* How Others Engaged You */}
      <div className="sos-card" onClick={()=>go('others')}>
        <div className="sos-card__title">How Others Engaged You</div>
        <div style={{display:'grid', gap:12, marginTop:10}}>
          <div className="sos-metric-row">
            <Metric icon="favorite" value="1,234" label="Likes" />
            <Metric icon="repeat"   value="567"   label="Retweets" />
          </div>
          <div className="sos-metric-row">
            <Metric icon="chat_bubble_outline" value="89" label="Replies" />
            <Metric icon="alternate_email"     value="45" label="Mentions" />
          </div>
        </div>
        <SeeMore tone="ink" />
      </div>

      {/* Content Insights */}
      <div className="sos-card" onClick={()=>go('content')}>
        <div className="sos-card__title">Your Content Insights</div>
        <div className="sos-topic-row" style={{marginTop:10}}>
          <div className="sos-topic">
            <div className="sos-topic__cap"><span className="material-symbols-outlined">mood</span></div>
            <div className="sos-topic__label">Emotion</div>
            <div className="sos-topic__value">Positive</div>
          </div>
          <div className="sos-topic">
            <div className="sos-topic__cap"><span className="material-symbols-outlined">lightbulb</span></div>
            <div className="sos-topic__label">Topic</div>
            <div className="sos-topic__value">Tech</div>
          </div>
          <div className="sos-topic">
            <div className="sos-topic__cap"><span className="material-symbols-outlined">edit_note</span></div>
            <div className="sos-topic__label">Word</div>
            <div className="sos-topic__value">Build</div>
          </div>
        </div>
        <SeeMore tone="ink" />
      </div>

      {/* How You / Posting Patterns — two small cards side by side */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, margin:'0 24px 24px'}}>
        <div style={{background:'var(--sos-tint)', borderRadius:8, padding:12}} onClick={()=>go('engaged')}>
          <div className="sos-card__title" style={{margin:0}}>How You Engaged</div>
          <div style={{display:'flex', flexDirection:'column', gap:8, marginTop:10}}>
            <Metric sm icon="favorite" value="5k"   label="Likes" />
            <Metric sm icon="repeat"   value="5k"   label="Retweets" />
            <Metric sm icon="chat_bubble_outline" value="26" label="Replies" />
          </div>
          <div style={{textAlign:'right', fontSize:10, color:'#141414', marginTop:8}}>see more ›</div>
        </div>
        <div style={{background:'var(--sos-tint)', borderRadius:8, padding:12}} onClick={()=>go('patterns')}>
          <div className="sos-card__title" style={{margin:0}}>Your Posting Patterns</div>
          <div style={{display:'flex', flexDirection:'column', gap:8, marginTop:10}}>
            <div style={{background:'#fff', borderRadius:4, padding:'4px 8px', fontSize:10}}>
              <div style={{color:'#626262', fontSize:9}}>Peak Date</div>
              <div style={{fontWeight:600}}>Mar 16</div>
            </div>
            <div style={{background:'#fff', borderRadius:4, padding:'4px 8px', fontSize:10}}>
              <div style={{color:'#626262', fontSize:9}}>Most Active</div>
              <div style={{fontWeight:600}}>Tuesday</div>
            </div>
            <div style={{background:'#fff', borderRadius:4, padding:'4px 8px', fontSize:10}}>
              <div style={{color:'#626262', fontSize:9}}>Peak Hour</div>
              <div style={{fontWeight:600}}>2PM</div>
            </div>
          </div>
          <div style={{textAlign:'right', fontSize:10, color:'#141414', marginTop:8}}>see more ›</div>
        </div>
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   06. PROFILE SUMMARY
   -------------------------------------------------------------- */
const SoSProfile = ({ back }) => {
  const [range, setRange] = useState('7D');
  return (
    <div className="sos-screen">
      <SoSHeader title="Profile Summary" onBack={back}
        right={<button className="sos-header__action"><span className="material-symbols-outlined">ios_share</span></button>} />
      <TimeRange value={range} onChange={setRange} />

      {/* Identity band */}
      <div style={{margin:'0 24px 16px', padding:16, borderRadius:8,
                   background:'linear-gradient(135deg, rgba(161,102,94,0.1), rgba(5,140,140,0.1))',
                   textAlign:'center'}}>
        <div style={{fontFamily:"'iA Writer Quattro S'", fontWeight:700, fontSize:18, color:'#141414',
                     textShadow:'0 2px 4px rgba(0,14,14,0.15)'}}>Jane Doe</div>
        <div style={{fontSize:12, color:'#626262', marginTop:2}}>@janedoe · 1.2k following · 847 followers</div>
      </div>

      <div className="sos-section-label">Archetype</div>
      <div className="sos-card" style={{textAlign:'center', padding:20}}>
        <div style={{fontFamily:"'iA Writer Quattro S'", fontWeight:700, fontSize:24,
                     letterSpacing:'-0.03em', color:'#023b3b', margin:'8px 0'}}>
          The Thoughtful Builder
        </div>
        <p className="sos-card__body" style={{maxWidth:'40ch', margin:'0 auto'}}>
          You post with intent, respond more than you broadcast, and favor craft talk over hot takes.
        </p>
      </div>

      <div className="sos-section-label">Signature traits</div>
      <div style={{margin:'0 24px 16px', display:'grid', gap:8}}>
        {[
          ['Thoughtful','You edit before you post. 68% of drafts are deleted.'],
          ['Reciprocal','You reply within 2 hours of being mentioned.'],
          ['Selective','You like ~4% of posts you see — in the top 3% of restrained users.'],
        ].map(([t,b]) => (
          <div key={t} className="sos-insight" style={{margin:0}}>
            <div className="sos-insight__title">{t}</div>
            <div className="sos-insight__body">{b}</div>
          </div>
        ))}
      </div>

      <div className="sos-section-label">At a glance</div>
      <div className="sos-card sos-card--white">
        <div className="sos-metric-row" style={{gap:12}}>
          <Metric icon="forum"       value="342"  label="Posts" />
          <Metric icon="group"       value="847"  label="Followers" />
        </div>
        <div className="sos-metric-row" style={{gap:12, marginTop:12}}>
          <Metric icon="favorite"    value="4.6%" label="Engagement" />
          <Metric icon="schedule"    value="22h"  label="Avg. active" />
        </div>
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   07. HABITS
   -------------------------------------------------------------- */
const SoSHabits = ({ back }) => {
  const [range, setRange] = useState('7D');
  const habits = [
    ['You post most often on Sundays','Your Sunday activity is 2.4× a weekday average.'],
    ['You\'re most active late at night','Your tweets cluster between 10pm and 1am.'],
    ['You rarely use swear words','Except during football-related conversations.'],
    ['You reply more than you post','71% of your activity is responses to others.'],
    ['You avoid hashtags','Only 3% of your posts include a hashtag — unusually low.'],
  ];
  return (
    <div className="sos-screen">
      <SoSHeader title="Habits" onBack={back}
        right={<button className="sos-header__action"><span className="material-symbols-outlined">ios_share</span></button>} />
      <TimeRange value={range} onChange={setRange} />

      <div style={{padding:'0 24px 12px', fontSize:14, color:'#141414'}}>
        Your recurring behaviors and tendencies on X
      </div>

      <div style={{padding:'0 24px'}}>
        {habits.map(([t,b]) => (
          <div key={t} className="sos-insight" style={{margin:'0 0 12px'}}>
            <div className="sos-insight__title">{t}</div>
            <div className="sos-insight__body">{b}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   08. HOW OTHERS ENGAGED YOU
   -------------------------------------------------------------- */
const SoSOthers = ({ back }) => {
  const [range, setRange] = useState('7D');
  const top = [
    { who:'Alex K.',      text:'This is the clearest explainer I\'ve read this week.', tag:'89 replies' },
    { who:'Monica R.',    text:'Retweeted with comment: "Pinned."',                     tag:'234 rt' },
    { who:'Dev community',text:'3 mentions in the #buildinpublic thread',              tag:'45 mentions' },
  ];
  return (
    <div className="sos-screen">
      <SoSHeader title="How Others Engaged You" onBack={back} />
      <TimeRange value={range} onChange={setRange} />

      <div className="sos-section-label">Overview</div>
      <div className="sos-card">
        <div className="sos-metric-row" style={{gap:12}}>
          <Metric icon="favorite"    value="891" label="Likes" />
          <Metric icon="repeat"      value="234" label="Retweets" />
        </div>
        <div className="sos-metric-row" style={{gap:12, marginTop:12}}>
          <Metric icon="chat_bubble_outline" value="67" label="Replies" />
          <Metric icon="alternate_email"     value="18" label="Mentions" />
        </div>
      </div>

      <div className="sos-section-label">Engagement over time</div>
      <div style={{margin:'0 24px 16px'}}>
        <BarChart title="Engagements, this week" />
      </div>

      <div className="sos-section-label">Top engagers</div>
      <div className="sos-list">
        {top.map((r,i) => (
          <div key={i} className="sos-list__row">
            <div className="sos-list__avatar">{r.who.split(' ').map(s=>s[0]).join('').slice(0,2)}</div>
            <div className="sos-list__text">
              <div className="sos-list__primary">{r.who}</div>
              <div className="sos-list__secondary">{r.text}</div>
            </div>
            <div className="sos-list__meta">{r.tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   09. HOW YOU ENGAGED OTHERS
   -------------------------------------------------------------- */
const SoSEngaged = ({ back }) => {
  const [range, setRange] = useState('7D');
  return (
    <div className="sos-screen">
      <SoSHeader title="How You Engaged Others" onBack={back} />
      <TimeRange value={range} onChange={setRange} />

      <div className="sos-section-label">Your Activity</div>
      <div style={{padding:'0 24px', display:'grid', gap:12}}>
        {[
          ['favorite','1,892','Likes given'],
          ['repeat','567','Retweets'],
          ['chat_bubble_outline','60','Replies'],
          ['alternate_email','11','Mentions'],
        ].map(([i,v,l]) => (
          <div key={l} className="sos-metric" style={{height:64, background:'#fff'}}>
            <div className="sos-metric__cap" style={{width:48}}>
              <span className="material-symbols-outlined">{i}</span>
            </div>
            <div className="sos-metric__body" style={{padding:'12px 16px'}}>
              <span className="sos-metric__value" style={{fontSize:18}}>{v}</span>
              <span className="sos-metric__label" style={{fontSize:11}}>{l}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="sos-section-label" style={{marginTop:20}}>Who you engage most</div>
      <div className="sos-list">
        {[
          ['sama','23 replies','OpenAI'],
          ['paulg','19 likes','Y Combinator'],
          ['dhh','14 replies','37signals'],
          ['levelsio','12 mentions','indie hacker'],
        ].map(([h,t,ctx]) => (
          <div key={h} className="sos-list__row">
            <div className="sos-list__avatar">@</div>
            <div className="sos-list__text">
              <div className="sos-list__primary">@{h}</div>
              <div className="sos-list__secondary">{ctx}</div>
            </div>
            <div className="sos-list__meta">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   10. POSTING PATTERNS
   -------------------------------------------------------------- */
const SoSPatterns = ({ back }) => {
  const [range, setRange] = useState('7D');
  return (
    <div className="sos-screen">
      <SoSHeader title="Posting Patterns" onBack={back} />
      <TimeRange value={range} onChange={setRange} />

      <div className="sos-section-label">Overview</div>
      <div className="sos-card">
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <div className="sos-stat">
            <div className="sos-stat__value">Mar 16</div>
            <div className="sos-stat__label">Peak posting date · 12 posts</div>
          </div>
          <div className="sos-stat">
            <div className="sos-stat__value">Tuesday</div>
            <div className="sos-stat__label">Most active weekday · 18 posts</div>
          </div>
          <div className="sos-stat">
            <div className="sos-stat__value">2 PM</div>
            <div className="sos-stat__label">Most active hour · 8 posts</div>
          </div>
          <div className="sos-stat">
            <div className="sos-stat__value">4.2</div>
            <div className="sos-stat__label">Posts / day avg.</div>
          </div>
        </div>
      </div>

      <div className="sos-section-label">By weekday</div>
      <div style={{margin:'0 24px 16px'}}>
        <BarChart title="Posts per weekday"
          labels={['M','T','W','T','F','S','S']}
          data={[0.4,0.9,0.5,0.6,0.3,0.2,1.0]} highlight={6} />
      </div>

      <div className="sos-section-label">By hour × day</div>
      <div style={{margin:'0 24px 24px'}}>
        <Heatmap />
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   11. CONTENT INSIGHTS
   -------------------------------------------------------------- */
const SoSContent = ({ back }) => {
  const [range, setRange] = useState('7D');
  return (
    <div className="sos-screen">
      <SoSHeader title="Content Insights" onBack={back}
        right={<button className="sos-header__action"><span className="material-symbols-outlined">ios_share</span></button>} />
      <TimeRange value={range} onChange={setRange} />

      <div className="sos-section-label">Sentiment</div>
      <div className="sos-card sos-card--white">
        <div className="sos-sentiment">
          {[
            ['mood','Positive','62','var(--sos-chart-pos)'],
            ['sentiment_neutral','Neutral','28','var(--sos-chart-neu)'],
            ['mood_bad','Negative','10','var(--sos-chart-neg)'],
          ].map(([i,l,p,c]) => (
            <div key={l} className="sos-sentiment__row">
              <div className="sos-sentiment__icon" style={{background:c}}>
                <span className="material-symbols-outlined" style={{fontSize:14}}>{i}</span>
              </div>
              <div className="sos-sentiment__label">{l}</div>
              <div className="sos-sentiment__track"><div className="sos-sentiment__fill" style={{width:p+'%', background:c}} /></div>
              <div className="sos-sentiment__pct">{p}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sos-section-label">Top topics</div>
      <div style={{margin:'0 24px 16px', display:'flex', flexWrap:'wrap', gap:8}}>
        {[
          ['AI',42],['Product',28],['Design',17],['Startups',13],
          ['Football',9],['Books',7],['Music',5],
        ].map(([t,n]) => (
          <div key={t} style={{
            padding:'8px 12px', borderRadius:100,
            background:'linear-gradient(135deg, rgba(161,102,94,0.1), rgba(5,140,140,0.1))',
            fontSize:13, color:'#141414',
            display:'inline-flex', alignItems:'center', gap:6,
          }}>
            {t}
            <span style={{fontSize:11, color:'#626262', fontFamily:'var(--font-mono)'}}>{n}</span>
          </div>
        ))}
      </div>

      <div className="sos-section-label">Most used words</div>
      <div style={{margin:'0 24px 16px', padding:20, background:'#fff', borderRadius:8,
                   boxShadow:'0 4px 8px rgba(0,0,0,0.05)', textAlign:'center', lineHeight:1.3}}>
        {[
          ['build',28],['actually',22],['curious',16],['ship',14],['interesting',12],
          ['system',10],['think',9],['maybe',8],['design',7],['try',6],
        ].map(([w,n]) => (
          <span key={w} style={{
            fontFamily:"'iA Writer Quattro S'", fontWeight:700,
            fontSize: 10+n, color: n>=20?'#023b3b':n>=12?'#058c8c':'#626262',
            margin:'0 6px', letterSpacing:'-0.02em',
          }}>{w}</span>
        ))}
      </div>

      <div className="sos-section-label">Tone mix</div>
      <div className="sos-card sos-card--white" style={{display:'flex', justifyContent:'center', padding:20}}>
        <Donut value={68} label="Earnest" color="#058c8c" />
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   12. TAG (section banner used between chapters of onboarding)
   -------------------------------------------------------------- */
const SoSTag = ({ label='Onboarding' }) => (
  <div className="sos-tag">{label}</div>
);

/* --------------------------------------------------------------
   CHART primitives (used in several screens)
   -------------------------------------------------------------- */
const BarChart = ({ title='', labels=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                   data=[0.6,0.8,0.5,0.9,0.4,0.3,0.7], highlight=3 }) => (
  <div className="sos-barchart">
    {title && <div className="sos-barchart__title">{title}</div>}
    <div className="sos-barchart__grid">
      {data.map((v,i) => (
        <div className="sos-barchart__col" key={i}>
          <div className={'sos-barchart__bar ' + (i===highlight ? '' : 'sos-barchart__bar--muted')}
               style={{height: (v*100)+'%'}} />
          <div className="sos-barchart__tick">{labels[i]}</div>
        </div>
      ))}
    </div>
  </div>
);

const Heatmap = () => {
  // 7 rows (days) × 24 cols (hours). Deterministic pseudo-random.
  const intensity = (d,h) => {
    const s = Math.sin(d*3.1 + h*0.7) * 0.5 + 0.5;
    const nightLoad = h>=22 || h<=1 ? 0.35 : 0;
    return Math.min(1, s*0.6 + nightLoad + (d===1 || d===6 ? 0.15 : 0));
  };
  const color = v => {
    const stops = ['#e6f4f4','#b2dbdb','#86dbdb','#058c8c','#023b3b'];
    return stops[Math.min(4, Math.floor(v*5))];
  };
  const days = ['S','M','T','W','T','F','S'];
  return (
    <div className="sos-heatmap">
      <div className="sos-barchart__title">Posts by hour × weekday</div>
      {days.map((dLabel,d) => (
        <div key={d} className="sos-heatmap__grid" style={{marginBottom:2}}>
          <div className="sos-heatmap__row-label">{dLabel}</div>
          {Array.from({length:24}).map((_,h) => (
            <div key={h} className="sos-heatmap__cell" style={{background: color(intensity(d,h))}} />
          ))}
        </div>
      ))}
      <div className="sos-heatmap__col-labels">
        <div />
        {Array.from({length:24}).map((_,h) => (
          <div key={h} className="sos-heatmap__col-label">{h%6===0?h:''}</div>
        ))}
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   BOTTOM TAB BAR
   -------------------------------------------------------------- */
const SoSTabs = ({ tab, setTab }) => (
  <div className="sos-tabs">
    {[
      ['home','home','Home'],
      ['insights','insights','Insights'],
      ['search','search','Search'],
      ['account','person','Account'],
    ].map(([k,icon,label]) => (
      <button key={k} onClick={()=>setTab(k)}
              className={'sos-tab ' + (tab===k?'is-active':'')}>
        <span className="material-symbols-outlined" style={{fontSize:24}}>{icon}</span>
        <span>{label}</span>
      </button>
    ))}
  </div>
);

Object.assign(window, {
  SoSLanding, SoSSignup, SoSLogin, SoSHome,
  SoSProfile, SoSHabits, SoSOthers, SoSEngaged,
  SoSPatterns, SoSContent, SoSTag, SoSTabs,
  BarChart, Heatmap,
});
