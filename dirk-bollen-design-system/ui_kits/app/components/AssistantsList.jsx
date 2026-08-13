// AssistantsList.jsx — Section/artboard rail for the design canvas workspace
// Modelled on the DCSection list from source_examples/website/design-canvas.jsx.
// Acts as the left-side navigator: section labels, artboard counts, active selection.

const { useState } = React;

const SECTIONS = [
  { id: 'onboarding', title: 'Onboarding', subtitle: 'First-run variants', count: 3, dot: '#EE4280' },
  { id: 'strategy',   title: 'Strategy canvas', subtitle: 'Journey map frames', count: 5, dot: '#45C4D9' },
  { id: 'ai',         title: 'AI interaction', subtitle: 'Prompt + synthesis', count: 4, dot: '#7460AB' },
  { id: 'workshop',   title: 'Workshop kit', subtitle: 'Facilitation boards', count: 2, dot: '#FDC40D' },
];

function AssistantsList({ activeSection, onSelect }) {
  return (
    <aside style={{
      width: '220px',
      flexShrink: 0,
      background: 'var(--db-gray-50)',
      borderRight: '1.5px solid var(--db-gray-100)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px',
        borderBottom: '1px solid var(--db-gray-100)',
      }}>
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: 'var(--db-gray-500)',
          margin: 0,
        }}>
          Sections
        </p>
      </div>

      {/* Section list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSelect && onSelect(section.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                padding: '10px 12px',
                background: isActive ? '#fff' : 'transparent',
                border: isActive ? '1.5px solid var(--db-gray-100)' : '1.5px solid transparent',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                marginBottom: '2px',
                boxShadow: isActive ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                transition: 'background 120ms ease, box-shadow 120ms ease',
              }}
            >
              <div style={{
                width: '8px', height: '8px',
                borderRadius: '50%',
                background: section.dot,
                flexShrink: 0,
              }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 500,
                  color: 'var(--db-ink)',
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {section.title}
                </p>
                <p style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '11px',
                  color: 'var(--db-gray-500)',
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {section.count} artboards
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{
        padding: '12px 16px',
        borderTop: '1px solid var(--db-gray-100)',
      }}>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'transparent', border: 0, cursor: 'pointer', padding: 0,
          fontFamily: 'var(--font-ui)', fontSize: '12px', fontWeight: 600, color: 'var(--db-pink)',
        }}>
          + New section
        </button>
      </div>
    </aside>
  );
}

window.AssistantsList = AssistantsList;
