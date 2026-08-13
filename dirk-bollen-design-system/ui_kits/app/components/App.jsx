// App.jsx — App shell for the Dirk Bollen design canvas workspace kit.
// Two modes controlled by a tab bar:
//   "site"   — composes Nav, Hero, Services, Clients, ContactCTA (personal site)
//   "canvas" — composes AssistantsList, ChatArea, InputBar, MessageBubble (design canvas)

const { useState } = React;
const { Nav, Hero, Services, Clients, ContactCTA, AssistantsList, ChatArea, InputBar, MessageBubble } = window;

function App() {
  const [mode, setMode] = useState('site');
  const [activeSection, setActiveSection] = useState('onboarding');
  const [notes, setNotes] = useState([
    { id: 1, color: 'cyan',   text: 'Map the current state journey first',        author: 'Dirk', timestamp: '09:14' },
    { id: 2, color: 'pink',   text: 'Future state: self-service onboarding',       author: 'Dirk', timestamp: '09:22' },
    { id: 3, color: 'yellow', text: 'Add failure mode for network timeout',        author: 'Dirk', timestamp: '10:05' },
    { id: 4, color: 'purple', text: 'AI synthesis: cluster themes from interviews',author: 'Dirk', timestamp: '10:18' },
  ]);

  const addNote = ({ color, text }) => {
    setNotes(prev => [...prev, {
      id: Date.now(), color, text, author: 'Dirk',
      timestamp: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    }]);
  };

  const tabStyle = (active) => ({
    padding: '6px 16px',
    borderRadius: '999px',
    border: 0,
    cursor: 'pointer',
    fontFamily: 'var(--font-ui)',
    fontSize: '13px',
    fontWeight: 600,
    background: active ? 'var(--db-ink)' : 'transparent',
    color: active ? '#fff' : 'var(--db-gray-500)',
    transition: 'background 150ms, color 150ms',
  });

  return (
    <div style={{ fontFamily: 'var(--font-body)', color: 'var(--db-ink)', lineHeight: 1.55, minHeight: '100vh' }}>

      {/* Mode switcher tab bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--db-gray-100)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px', height: '52px',
      }}>
        <img src="../../assets/logo-color.png" alt="Dirk Bollen" style={{ height: '24px', width: 'auto' }} />
        <div style={{ display: 'flex', gap: '4px', background: 'var(--db-gray-50)', padding: '4px', borderRadius: '999px' }}>
          <button style={tabStyle(mode === 'site')}   onClick={() => setMode('site')}>Personal site</button>
          <button style={tabStyle(mode === 'canvas')} onClick={() => setMode('canvas')}>Design canvas</button>
        </div>
        <div style={{ width: '80px' }} />
      </div>

      {/* Personal site mode */}
      {mode === 'site' && (
        <main style={{ paddingTop: '52px' }}>
          <Nav />
          <Hero />
          <Services />
          <Clients />
          <ContactCTA />
          <footer style={{
            background: 'var(--db-gray-50)', borderTop: '1px solid var(--db-gray-100)',
            padding: '24px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <img src="../../assets/logo-line.png" alt="Dirk Bollen" style={{ height: '22px', opacity: 0.5 }} />
            <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', color: 'var(--db-gray-500)', margin: 0 }}>
              Personal brand system · Dirk Bollen · Belgium
            </p>
          </footer>
        </main>
      )}

      {/* Design canvas mode */}
      {mode === 'canvas' && (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', paddingTop: '52px' }}>
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            {/* Section rail */}
            <AssistantsList activeSection={activeSection} onSelect={setActiveSection} />

            {/* Canvas area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <ChatArea activeSection={activeSection} />

              {/* Notes strip */}
              {notes.length > 0 && (
                <div style={{
                  background: '#f9f7f4',
                  borderTop: '1px solid var(--db-gray-100)',
                  padding: '12px 16px',
                  display: 'flex', gap: '12px', overflowX: 'auto',
                }}>
                  {notes.map((note) => (
                    <MessageBubble
                      key={note.id}
                      color={note.color}
                      text={note.text}
                      author={note.author}
                      timestamp={note.timestamp}
                    />
                  ))}
                </div>
              )}

              {/* Input bar */}
              <InputBar onAddNote={addNote} placeholder="Add a post-it note to this canvas section…" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

window.App = App;
