import React, { useState } from 'react';
import Stepper from '../components/Stepper';
import OnboardingForm from '../components/OnboardingForm';

const STEPS = ['Basics', 'Investment', 'Preferences'];

export default function BuyerOnboarding() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, any>>({});

  const forms = [
    [
      { type: 'text', name: 'name', label: 'Your Name', placeholder: 'e.g., Mohan Iyer' },
      { type: 'email', name: 'email', label: 'Email' },
      { type: 'select', name: 'buyerType', label: 'Buyer Type', options: ['Individual', 'Fund', 'Strategic'] },
    ],
    [
      { type: 'number', name: 'budgetMin', label: 'Budget Min (INR)' },
      { type: 'number', name: 'budgetMax', label: 'Budget Max (INR)' },
      { type: 'text', name: 'location', label: 'Location', placeholder: 'City, Country' },
    ],
    [
      { type: 'text', name: 'sectors', label: 'Preferred Sectors', placeholder: 'Comma separated' },
      { type: 'textarea', name: 'notes', label: 'Notes / Strategy' },
    ],
  ];

  function onChange(name: string, value: any) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Buyer Onboarding</h2>
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
