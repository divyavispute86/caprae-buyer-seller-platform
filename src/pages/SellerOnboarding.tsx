import React, { useState } from 'react';
import Stepper from '../components/Stepper';
import OnboardingForm from '../components/OnboardingForm';

const STEPS = ['Company', 'Financials', 'Intent'];

export default function SellerOnboarding() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, any>>({});

  const forms = [
    [
      { type: 'text', name: 'company', label: 'Company Name' },
      { type: 'text', name: 'sector', label: 'Sector' },
      { type: 'text', name: 'hq', label: 'HQ Location' },
    ],
    [
      { type: 'number', name: 'revenue', label: 'Annual Revenue (INR)' },
      { type: 'number', name: 'ebitda', label: 'EBITDA (INR)' },
      { type: 'number', name: 'employees', label: 'Employees' },
    ],
    [
      { type: 'select', name: 'timeline', label: 'Timeline', options: ['<3 months', '3–6 months', '6–12 months'] },
      { type: 'textarea', name: 'dealNotes', label: 'Deal Notes / Constraints' },
    ],
  ];

  function onChange(name: string, value: any) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Seller Onboarding</h2>
      <Stepper steps={STEPS} current={step} />
      <OnboardingForm
        values={values}
        fields={forms[step]}
        onChange={onChange}
        onBack={step > 0 ? () => setStep(step - 1) : undefined}
        onNext={step < forms.length - 1 ? () => setStep(step + 1) : () => alert('Submitted! (mock)')}
        nextText={step < forms.length - 1 ? 'Next' : 'Finish'}
      />
    </div>
  );
}
