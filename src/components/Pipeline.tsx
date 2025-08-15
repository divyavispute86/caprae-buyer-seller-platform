import React from 'react';

const STAGES = ['Intro', 'NDA', 'Docs', 'Diligence', 'LOI', 'Close'];

export default function Pipeline({ current = 2 }: { current?: number }) {
  return (
    <div className="card">
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        {STAGES.map((s, i) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div className="badge" style={{
              background: i <= current ? '#dcfce7' : '#f1f5f9',
              color: i <= current ? '#166534' : '#475569'
            }}>{i + 1}</div>
            <div style={{ fontWeight: i === current ? 800 : 600 }}>{s}</div>
            {i < STAGES.length - 1 && <div style={{ width: 30, height: 2, background: '#e5e7eb' }} />}
          </div>
        ))}
      </div>
    </div>
  );
}
