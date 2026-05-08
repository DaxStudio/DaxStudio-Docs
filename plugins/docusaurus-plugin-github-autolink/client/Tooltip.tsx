import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  anchor: HTMLElement;
  title: string;
  body: string;
}

export function Tooltip({ anchor, title, body }: Props) {
  const rect = anchor.getBoundingClientRect();

  return ReactDOM.createPortal(
    <div
      className="gh-tooltip"
      style={{
        position: 'fixed',
        left: rect.left,
        top: rect.bottom + 4,
      }}
    >
      <strong>{title}</strong>
      {body ? <div className="gh-tooltip-body">{body}</div> : null}
    </div>,
    document.body
  );
}
