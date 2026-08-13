// ChatArea.jsx — Design canvas / artboard area
// Modelled on the DCArtboard + DCSection canvas layout from source_examples/website/design-canvas.jsx.
// Renders a warm-grid canvas background with artboard cards and drag-reorder grips.

const ARTBOARDS = {
  onboarding: [
    { id: 'a', label: 'A · Dusk', width: 260, height: 480, dot: '#EE4280' },
    { id: 'b', label: 'B · Minimal', width: 260, height: 480, dot: '#45C4D9' },
    { id: 'c', label: 'C · Bold', width: 260, height: 480, dot: '#7460AB' },
  ],
  strategy: [
    { id: 'a', label: '01 · Current state', width: 340, height: 220, dot: '#45C4D9' },
    { id: 'b', label: '02 · Gap analysis', width: 340, height: 220, dot: '#EE4280' },
    { id: 'c', label: '03 · Future state', width: 340, height: 220, dot: '#7460AB' },
    { id: 'd', label: '04 · Roadmap', width: 340, height: 220, dot: '#FDC40D' },
  ],
  ai: [
    { id: 'a', label: 'Prompt flow', width: 300, height: 360, dot: '#7460AB' },
    { id: 'b', label: 'Synthesis', width: 300, height: 360, dot: '#45C4D9' },
    { id: 'c', label: 'Output states', width: 300, height: 360, dot: '#EE4280' },
  ],
  workshop: [
    { id: 'a', label: 'Icebreaker', width: 400, height: 300, dot: '#FDC40D' },
    { id: 'b', label: 'HMW wall', width: 400, height: 300, dot: '#45C4D9' },
  ],
};

function ArtboardCard({ artboard }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      {/* Drag grip + label row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', alignSelf: 'flex-start' }}>
        <div style={{
          cursor: 'grab', padding: '4px', borderRadius: '4px',
          color: 'rgba(60,50,40,0.4)', fontSize: '12px', lineHeight: 1,
        }}>⠿</div>
        <span style={{
          fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: 500,
          color: 'rgba(40,30,20,0.75)',
        }}>
          {artboard.label}
        </span>
        <div style={{
          width: '6px', height: '6px', borderRadius: '50%', background: artboard.dot, marginLeft: '4px',
        }} />
      </div>

      {/* Artboard card */}
      <div style={{
        width: artboard.width,
        height: artboard.height,
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
        border: '1px solid rgba(0,0,0,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Placeholder content */}
        <div style={{
          width: '60%', height: '60%',
          border: `2px solid ${artboard.dot}`,
          borderRadius: '8px',
          opacity: 0.3,
        }} />
        <div style={{
          position: 'absolute', bottom: '12px',
          fontFamily: 'var(--font-ui)', fontSize: '11px', color: 'rgba(0,0,0,0.3)',
          letterSpacing: '0.04em',
        }}>
          {artboard.width} × {artboard.height}
        </div>
      </div>
    </div>
  );
}

function ChatArea({ activeSection = 'onboarding' }) {
  const artboards = ARTBOARDS[activeSection] || ARTBOARDS.onboarding;

  return (
    <div style={{
      flex: 1,
      background: '#f0eee9',
      backgroundImage: `
        linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
      `,
      backgroundSize: '24px 24px',
      overflowY: 'auto',
      overflowX: 'auto',
      padding: '48px',
    }}>
      {/* Section header */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
          color: 'rgba(40,30,20,0.85)', margin: '0 0 4px',
        }}>
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1).replace('-', ' ')}
        </p>
        <p style={{
          fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'rgba(60,50,40,0.55)', margin: 0,
        }}>
          {artboards.length} artboard{artboards.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Artboard row */}
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {artboards.map((ab) => (
          <ArtboardCard key={ab.id} artboard={ab} />
        ))}
      </div>
    </div>
  );
}

window.ChatArea = ChatArea;
