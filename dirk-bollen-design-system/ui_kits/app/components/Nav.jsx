// Nav.jsx — Site navigation bar for Dirk Bollen personal brand
// Sticky, transparent-to-frosted on scroll, ink background optional for dark variant.

const { useState, useEffect } = React;

function Nav({ variant = 'light' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 48px',
    height: '68px',
    transition: 'background 220ms ease, box-shadow 220ms ease',
    background: scrolled
      ? variant === 'dark' ? 'rgba(33,27,67,0.97)' : 'rgba(255,255,255,0.95)'
      : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
  };

  const linkStyles = {
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    fontWeight: 500,
    color: variant === 'dark' ? '#fff' : 'var(--db-ink)',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <nav style={navStyles}>
      <img
        src="../../assets/logo-color.png"
        alt="Dirk Bollen"
        style={{ height: '32px', width: 'auto' }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {['Work', 'About', 'Talks', 'Teaching'].map((label) => (
          <a key={label} href="#" style={linkStyles}>{label}</a>
        ))}
        <button
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '10px 20px',
            fontFamily: 'var(--font-ui)',
            fontWeight: 600,
            fontSize: '14px',
            letterSpacing: '0.02em',
            borderRadius: '999px',
            border: 0,
            cursor: 'pointer',
            background: 'var(--db-pink)',
            color: '#fff',
            transition: 'transform 120ms ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
          onMouseLeave={e => e.currentTarget.style.transform = ''}
        >
          Get in touch
        </button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
