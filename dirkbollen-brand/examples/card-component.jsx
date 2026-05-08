/**
 * Dirk Bollen — sample tokenised React component.
 *
 * Demonstrates the canonical pattern: every visual value pulls from a CSS
 * variable defined in tokens.css. No hex values inline. No Tailwind required.
 *
 * Drop-in: ensure tokens.css is loaded somewhere upstream (root layout, _app,
 * index.html). Then import this component.
 */

import React from "react";

const SIGNATURE = {
  today:  "var(--db-cyan)",
  future: "var(--db-pink)",
  ai:     "var(--db-purple)",
  spark:  "var(--db-yellow)",
};

export default function ServiceCard({
  accent = "today",
  eyebrow,
  title,
  description,
  href,
}) {
  const dotColor = SIGNATURE[accent] ?? SIGNATURE.today;

  return (
    <a
      href={href}
      style={styles.card}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--sh-2)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--sh-0)")}
    >
      <span style={{ ...styles.dot, background: dotColor }} aria-hidden />
      {eyebrow && <span style={styles.eyebrow}>{eyebrow}</span>}
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.body}>{description}</p>
      <span style={styles.cta}>Read more →</span>
    </a>
  );
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--s-3)",
    padding: "var(--s-6)",
    background: "var(--db-white)",
    border: "var(--bw-1) solid var(--db-ink)",
    borderRadius: "var(--r-md)",
    color: "var(--db-ink)",
    textDecoration: "none",
    transition: "box-shadow var(--dur-med) var(--ease-out)",
    maxWidth: "320px",
  },
  dot: {
    width: "14px",
    height: "14px",
    borderRadius: "var(--r-full)",
    marginBottom: "var(--s-2)",
  },
  eyebrow: {
    fontFamily: "var(--font-ui)",
    fontSize: "var(--t-caption)",
    fontWeight: 600,
    letterSpacing: "var(--tr-caps)",
    textTransform: "uppercase",
    color: "var(--db-pink)",
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: "var(--t-h4)",
    fontWeight: 600,
    margin: 0,
    letterSpacing: "var(--tr-normal)",
    lineHeight: "var(--lh-snug)",
  },
  body: {
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    color: "var(--db-gray-500)",
    lineHeight: "var(--lh-relaxed)",
    margin: 0,
  },
  cta: {
    fontFamily: "var(--font-ui)",
    fontWeight: 600,
    fontSize: "14px",
    color: "var(--db-pink)",
    marginTop: "var(--s-3)",
  },
};
