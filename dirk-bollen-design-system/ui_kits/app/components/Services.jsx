// Services.jsx — Service cards grid section for Dirk Bollen personal site
// Four practice areas, each with a brand hue dot and a service card.

function Services() {
  const services = [
    {
      dot: '#EE4280',
      label: 'Future / signal',
      title: 'Digital Strategy',
      desc: 'From high-level vision to a feasible roadmap. Clients include Proximus, KBC, InThePocket, and Evonik.',
    },
    {
      dot: '#45C4D9',
      label: 'Today',
      title: 'Service Design',
      desc: 'Customer journey mapping, service blueprinting, and facilitated research with cross-functional teams.',
    },
    {
      dot: '#7460AB',
      label: 'AI / synthesis',
      title: 'AI & Human Behaviour',
      desc: 'Research-led approach to human-digital transformation. PhD-grounded perspective on how people adapt to AI.',
    },
    {
      dot: '#FDC40D',
      label: 'Spark',
      title: 'Workshop Facilitation',
      desc: '"From idea to execution: a pragmatic introduction in design thinking." — taught at universities and client sites.',
    },
  ];

  return (
    <section style={{
      background: '#fff',
      padding: '96px 48px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--db-pink)',
          marginBottom: '16px',
        }}>
          What Dirk does
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '40px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--db-ink)',
          margin: '0 0 64px',
        }}>
          Practice areas
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {services.map((svc) => (
            <div
              key={svc.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '32px',
                border: '1.5px solid #E6E6E6',
                borderRadius: '10px',
                background: '#fff',
                boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                cursor: 'default',
                transition: 'transform 220ms ease, box-shadow 220ms ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.06)';
              }}
            >
              <div style={{
                width: '14px', height: '14px',
                borderRadius: '50%',
                background: svc.dot,
              }} />
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--db-ink)',
                margin: 0,
                letterSpacing: '-0.01em',
              }}>
                {svc.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: '#747070',
                lineHeight: 1.6,
                maxWidth: '38ch',
                margin: 0,
              }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Services = Services;
