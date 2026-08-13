// ContactCTA.jsx — Contact/CTA footer band for Dirk Bollen personal site
// Dark ink background with centered headline, email link, and social chips.

const { useState } = React;

function ContactCTA() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('hi@dirkbollen.be').catch(() => {});
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section style={{
      background: 'var(--db-ink)',
      padding: '96px 48px',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--db-cyan)',
          margin: '0 0 24px',
        }}>
          Let's talk
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          color: '#fff',
          margin: '0 0 24px',
        }}>
          Start a conversation
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '18px',
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.55,
          margin: '0 0 48px',
        }}>
          Interested in working together? Reach out — whether it's a strategy brief,
          a facilitation request, or just a coffee.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
          <button
            onClick={handleCopy}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 24px',
              fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '15px', letterSpacing: '0.02em',
              borderRadius: '999px', border: 0, cursor: 'pointer',
              background: emailCopied ? 'var(--db-cyan)' : 'var(--db-pink)',
              color: emailCopied ? 'var(--db-ink)' : '#fff',
              transition: 'background 220ms ease, transform 120ms ease',
            }}
          >
            {emailCopied ? '✓ Copied!' : 'hi@dirkbollen.be'}
          </button>
          <button style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '14px 24px',
            fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '15px',
            borderRadius: '999px',
            background: 'transparent', color: '#fff',
            border: '1.5px solid rgba(255,255,255,0.35)',
            cursor: 'pointer',
          }}>
            LinkedIn
          </button>
        </div>

        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
          Belgium · PhD Human-Computer Interaction · Digital Strategist
        </p>
      </div>
    </section>
  );
}

window.ContactCTA = ContactCTA;
