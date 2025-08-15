import React, { useEffect, useState } from 'react';
import { listTasks, toggleTask, MatchTask } from '../api/mock';

export default function TaskChecklist() {
  const [items, setItems] = useState<MatchTask[]>([]);

  useEffect(() => {
    listTasks().then(setItems);
  }, []);

  async function handleToggle(id: string) {
    const updated = await toggleTask(id);
    setItems(updated);
  }

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Deal Tasks</h3>
      <ul style={{ paddingLeft: 0, margin: 0 }}>
        {items.map((t) => (
          <li key={t.id} style={{ marginBottom: 8, listStyle: 'none' }}>
            <label style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <input type="checkbox" checked={t.done} onChange={() => handleToggle(t.id)} />
              <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
