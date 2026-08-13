// MessageBubble.jsx — Post-it note / comment component for the design canvas
// Modelled on DCPostIt from source_examples/website/design-canvas.jsx.
// Floating sticky notes that live on the canvas artboard area.

const POST_IT_COLORS = {
  yellow: { bg: '#fef4a8', text: '#5a4a2a', label: 'Note' },
  pink:   { bg: 'rgba(238,66,128,0.12)', text: '#8a1840', label: 'Signal' },
  cyan:   { bg: 'rgba(69,196,217,0.14)', text: '#1a6a78', label: 'Today' },
  purple: { bg: 'rgba(116,96,171,0.14)', text: '#3a2868', label: 'Synthesis' },
};

function MessageBubble({ color = 'yellow', text = '', author = '', timestamp = '', editable = false }) {
  const theme = POST_IT_COLORS[color] || POST_IT_COLORS.yellow;
  const { useState, useRef } = React;
  const [content, setContent] = useState(text);
  const ref = useRef(null);

  return (
    <div style={{
      background: theme.bg,
      borderRadius: '3px',
      padding: '12px 14px',
      minWidth: '160px',
      maxWidth: '240px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
      position: 'relative',
    }}>
      {/* Color tag */}
      <div style={{
        position: 'absolute',
        top: '-1px',
        left: '12px',
        width: '28px',
        height: '3px',
        borderRadius: '0 0 2px 2px',
        background: theme.text,
        opacity: 0.35,
      }} />

      {/* Editable content */}
      {editable ? (
        <div
          ref={ref}
          contentEditable
          suppressContentEditableWarning
          onInput={e => setContent(e.currentTarget.textContent)}
          style={{
            fontFamily: '-apple-system, system-ui, sans-serif',
            fontSize: '13px',
            lineHeight: 1.45,
            color: theme.text,
            outline: 'none',
            minHeight: '40px',
            cursor: 'text',
          }}
        >
          {content || 'Add a note…'}
        </div>
      ) : (
        <p style={{
          fontFamily: '-apple-system, system-ui, sans-serif',
          fontSize: '13px',
          lineHeight: 1.45,
          color: theme.text,
          margin: 0,
        }}>
          {content || 'Add a note…'}
        </p>
      )}

      {/* Author + timestamp */}
      {(author || timestamp) && (
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginTop: '8px', paddingTop: '6px',
          borderTop: `1px solid ${theme.text}20`,
        }}>
          {author && (
            <span style={{
              fontFamily: 'var(--font-ui)', fontSize: '10px', fontWeight: 600,
              color: theme.text, opacity: 0.65, letterSpacing: '0.04em',
            }}>
              {author}
            </span>
          )}
          {timestamp && (
            <span style={{
              fontFamily: 'var(--font-ui)', fontSize: '10px',
              color: theme.text, opacity: 0.5,
            }}>
              {timestamp}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

window.MessageBubble = MessageBubble;
