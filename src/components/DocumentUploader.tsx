import React, { useState } from 'react';
import { analyzeFinancials } from '../api/mock';

export default function DocumentUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    if (!file) return;
    setLoading(true);
    const s = await analyzeFinancials(file);
    setSummary(s);
    setLoading(false);
  }

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>AI Financial Doc Analyzer (Mock)</h3>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <button className="btn btn-primary" onClick={handleAnalyze} disabled={!file || loading}>
          {loading ? 'Analyzing…' : 'Analyze'}
        </button>
        {file && <span className="badge">{file.name}</span>}
      </div>
      {summary && (
        <>
          <hr className="sep" />
          <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{summary}</pre>
        </>
      )}
    </div>
  );
}
