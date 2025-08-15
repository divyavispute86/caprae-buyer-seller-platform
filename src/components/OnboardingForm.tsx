import React from 'react';

type Field =
  | { type: 'text' | 'email' | 'number'; name: string; label: string; placeholder?: string }
  | { type: 'select'; name: string; label: string; options: string[] }
  | { type: 'textarea'; name: string; label: string; placeholder?: string };

type Props = {
  values: Record<string, any>;
  fields: Field[];
  onChange: (name: string, value: any) => void;
  onNext?: () => void;
  onBack?: () => void;
  nextText?: string;
};

export default function OnboardingForm({ values, fields, onChange, onNext, onBack, nextText = 'Next' }: Props) {
  return (
    <div className="card">
      <div className="row">
        {fields.map((f) => (
          <div className="col" key={f.name}>
            <label className="label">{f.label}</label>
            {f.type === 'select' ? (
              <select
                className="select"
                value={values[f.name] ?? ''}
                onChange={(e) => onChange(f.name, e.target.value)}
              >
                <option value="" disabled>Select {f.label}</option>
                {f.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            ) : f.type === 'textarea' ? (
              <textarea
                className="textarea" rows={4} placeholder={f.placeholder}
                value={values[f.name] ?? ''} onChange={(e) => onChange(f.name, e.target.value)}
              />
            ) : (
              <input
                className="input" type={f.type} placeholder={f.placeholder}
                value={values[f.name] ?? ''} onChange={(e) => onChange(f.name, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>

      <hr className="sep" />
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        {onBack && <button className="btn btn-outline" onClick={onBack}>Back</button>}
        {onNext && <button className="btn btn-primary" onClick={onNext}>{nextText}</button>}
      </div>
    </div>
  );
}
