import React from 'react';

type Props = { steps: string[]; current: number; };

export default function Stepper({ steps, current }: Props) {
  return (
    <div className="card" style={{ padding: 12 }}>
      <div className="row">
        {steps.map((label, idx) => (
          <div key={label} className="col" style={{ minWidth: 120 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="badge" style={{
                background: idx <= current ? '#e0e7ff' : '#f1f5f9',
                color: idx <= current ? '#3730a3' : '#475569'
              }}>
                {idx + 1}
              </div>
              <div style={{ fontWeight: idx === current ? 700 : 500 }}>
                {label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
