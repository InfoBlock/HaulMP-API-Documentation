import React from 'react';
import styles from './styles.module.css';

const COLORS = {
  GET: '#2f9e44',
  POST: '#1c7ed6',
  PUT: '#f08c00',
  PATCH: '#7048e8',
  DELETE: '#e03131',
};

export default function Endpoint({ method = 'GET', base, path }) {
  return (
    <div className={styles.endpoint}>
      <span className={styles.method} style={{ background: COLORS[method] || '#495057' }}>
        {method}
      </span>
      <code className={styles.path}>
        {base ? <span className={styles.base}>{base}</span> : null}
        {path}
      </code>
    </div>
  );
}
