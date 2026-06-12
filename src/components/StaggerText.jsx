import React from 'react';

export default function StaggerText({ text }) {
  // Split the text into words and wrap each in a span with staggered animation delay
  const words = text.split(' ');
  return (
    <span className="stagger-text scroll-reveal">
      {words.map((word, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}
