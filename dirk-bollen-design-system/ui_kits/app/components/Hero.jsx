// Hero.jsx — Full-bleed dark hero section for Dirk Bollen personal site
// Dark ink background, display headline, lead copy, CTA pair, and diagram hue palette strip.

function Hero() {
  const heroStyles = {
    background: 'var(--db-ink)',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '120px 48px 96px',
    position: 'relative',
    overflow: 'hidden',
  };

  const decorStyles = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '420px',
    height: '420px',
    opacity: 0.07,
    pointerEvents: 'none',
  };

  return (
    <section style={heroStyles}>
      {/* Geometric B mark — background decoration */}
      <div style={decorStyles}>
        <img
          src="../../assets/logo-icon-filled.svg"
          alt=""
          style={{ width: '100%', height: '100%', filter: 'brightness(0) invert(1)' }}
        />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative' }}>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--db-cyan)',
          marginBottom: '24px',
        }}>
          Digital Strategy · Service Design · AI & Human Behaviour
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 6vw, 88px)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          color: '#fff',
          margin: '0 0 32px',
          maxWidth: '16ch',
        }}>
          Making the<br/>
          <span style={{ color: 'var(--db-pink)' }}>complex</span> simple.
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '20px',
          lineHeight: 1.55,
          color: 'rgba(255,255,255,0.72)',
          maxWidth: '52ch',
          marginBottom: '48px',
        }}>
          Dirk Bollen — digital &amp; service-design strategist with a PhD in Human-Computer
          Interaction. Based in Belgium. Focused on digital strategy, product management,
          and the intersection of AI with human behaviour.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '14px 24px',
            fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '15px', letterSpacing: '0.02em',
            borderRadius: '999px', border: 0, cursor: 'pointer',
            background: 'var(--db-pink)', color: '#fff',
            transition: 'transform 120ms ease',
          }}>
            See the work
          </button>
          <button style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '14px 24px',
            fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '15px',
            borderRadius: '999px',
            background: 'transparent', color: '#fff',
            border: '1.5px solid rgba(255,255,255,0.35)',
            cursor: 'pointer', transition: 'transform 120ms ease',
          }}>
            Get in touch
          </button>
        </div>

        {/* Colour palette hue strip — semantic indicator */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '72px', alignItems: 'center' }}>
          {[
            { color: '#EE4280', label: 'Future / signal' },
            { color: '#45C4D9', label: 'Today' },
            { color: '#7460AB', label: 'AI / synthesis' },
            { color: '#FDC40D', label: 'Spark' },
          ].map(({ color, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color }} />
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
