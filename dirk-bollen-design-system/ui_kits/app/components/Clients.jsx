// Clients.jsx — Client/quote section for Dirk Bollen personal site
// Pull quote + client name tags on a muted background.

function Clients() {
  const clients = [
    'Proximus', 'KBC', 'itsme®', 'InThePocket', 'Nascom',
    'Made', 'Boondoggle', 'Evonik', 'Peel House of Innovation', 'PAU',
  ];

  return (
    <section style={{
      background: 'var(--db-gray-50)',
      padding: '96px 48px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Quote */}
          <div>
            <p style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--db-pink)',
              margin: '0 0 24px',
            }}>
              Philosophy
            </p>
            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: 1.2,
              margin: '0 0 24px',
              paddingLeft: '24px',
              borderLeft: '3px solid var(--db-pink)',
              color: 'var(--db-ink)',
            }}>
              "Going the distance from high level strategic insight into a feasible roadmap."
            </blockquote>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#747070',
              margin: '0',
              paddingLeft: '24px',
            }}>
              — Dirk Bollen, PhD Human-Computer Interaction
            </p>
          </div>

          {/* Clients */}
          <div>
            <p style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--db-purple)',
              margin: '0 0 24px',
            }}>
              Clients &amp; collaborators
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {clients.map((name) => (
                <span
                  key={name}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '6px 16px',
                    borderRadius: '999px',
                    background: '#fff',
                    border: '1.5px solid #E6E6E6',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--db-ink)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Clients = Clients;
