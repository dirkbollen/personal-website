// InputBar.jsx — Label editor / note input bar for the design canvas
// Modelled on the editable label row (dc-editable) from source_examples/website/design-canvas.jsx.
// Provides a create-note toolbar and an inline label-editing input.

const { useState } = React;

const NOTE_TYPES = [
  { key: 'yellow', color: '#fef4a8', border: '#d4b800', label: 'Note' },
  { key: 'pink',   color: 'rgba(238,66,128,0.15)', border: '#EE4280', label: 'Signal' },
  { key: 'cyan',   color: 'rgba(69,196,217,0.15)', border: '#45C4D9', label: 'Today' },
  { key: 'purple', color: 'rgba(116,96,171,0.15)', border: '#7460AB', label: 'Synthesis' },
];

function InputBar({ onAddNote, placeholder = 'Add a note to this artboard…' }) {
  const [value, setValue] = useState('');
  const [noteType, setNoteType] = useState('yellow');
  const [focused, setFocused] = useState(false);

  const handleSubmit = () => {
    if (!value.trim()) return;
    onAddNote && onAddNote({ color: noteType, text: value.trim() });
    setValue('');
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const selectedType = NOTE_TYPES.find(t => t.key === noteType) || NOTE_TYPES[0];

  return (
    <div style={{
      background: '#fff',
      borderTop: '1.5px solid var(--db-gray-100)',
      padding: '12px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}>
      {/* Note type selector */}
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        <span style={{
          fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--db-gray-500)',
          marginRight: '4px',
        }}>
          Type
        </span>
        {NOTE_TYPES.map((type) => (
          <button
            key={type.key}
            onClick={() => setNoteType(type.key)}
            title={type.label}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              padding: '4px 10px',
              borderRadius: '999px',
              background: type.color,
              border: `1.5px solid ${noteType === type.key ? type.border : 'transparent'}`,
              cursor: 'pointer',
              fontFamily: 'var(--font-ui)', fontSize: '11px', fontWeight: 600,
              color: noteType === type.key ? type.border : 'rgba(0,0,0,0.5)',
              transition: 'border-color 120ms, color 120ms',
            }}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Text input row */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
          background: focused ? '#fff' : 'var(--db-gray-50)',
          border: `1.5px solid ${focused ? 'var(--db-ink)' : 'var(--db-gray-100)'}`,
          borderRadius: '8px',
          transition: 'border-color 120ms, background 120ms',
        }}>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={handleKey}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            style={{
              flex: 1, border: 0, outline: 'none', background: 'transparent',
              fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--db-ink)',
            }}
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={!value.trim()}
          style={{
            padding: '8px 16px',
            borderRadius: '999px',
            border: 0, cursor: value.trim() ? 'pointer' : 'not-allowed',
            fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: '13px',
            background: value.trim() ? selectedType.border : 'var(--db-gray-200)',
            color: value.trim() ? '#fff' : 'var(--db-gray-500)',
            transition: 'background 120ms',
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
}

window.InputBar = InputBar;
