import React, { useState } from 'react';

type Msg = { id: string; who: 'buyer' | 'seller' | 'system'; text: string; ts: string; };

const seed: Msg[] = [
  { id: 'm1', who: 'system', text: 'You matched! Say hello 👋', ts: new Date().toLocaleString() },
  { id: 'm2', who: 'buyer', text: 'Hi! Excited to learn more about your SaaS.', ts: new Date().toLocaleString() },
];

export default function MessageThread() {
  const [msgs, setMsgs] = useState<Msg[]>(seed);
  const [input, setInput] = useState('');

  function send(who: 'buyer' | 'seller') {
    if (!input.trim()) return;
    setMsgs((m) => [...m, { id: crypto.randomUUID(), who, text: input.trim(), ts: new Date().toLocaleString() }]);
    setInput('');
  }

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Messages</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 240, overflow: 'auto' }}>
        {msgs.map((m) => (
          <div key={m.id} style={{
            alignSelf: m.who === 'buyer' ? 'flex-start' : m.who === 'seller' ? 'flex-end' : 'center',
            background: m.who === 'system' ? '#f1f5f9' : m.who === 'buyer' ? '#e0e7ff' : '#dcfce7',
            padding: 10, borderRadius: 10, maxWidth: '80%'
          }}>
            <div style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>
              {m.who.toUpperCase()} · {m.ts}
            </div>
            <div>{m.text}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <input className="input" placeholder="Type a message…" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="btn btn-outline" onClick={() => send('seller')}>Send</button>
      </div>
    </div>
  );
}
