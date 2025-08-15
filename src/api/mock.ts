export type Buyer = {
  id: string;
  name: string;
  buyerType: 'Individual' | 'Fund' | 'Strategic';
  location: string;
  budgetMin: number;
  budgetMax: number;
  sectors: string[];
  trackRecord: { dealsClosed: number; notes: string };
  preferences: string;
};

export type MatchTask = {
  id: string;
  title: string;
  done: boolean;
};

const buyers: Buyer[] = [
  {
    id: 'b1',
    name: 'Aria Ventures',
    buyerType: 'Fund',
    location: 'NY, USA',
    budgetMin: 2000000,
    budgetMax: 12000000,
    sectors: ['SaaS', 'DevTools'],
    trackRecord: { dealsClosed: 5, notes: 'Focus on B2B ARR > $1M' },
    preferences: 'Founder transition within 12 months',
  },
  {
    id: 'b2',
    name: 'Mohan Iyer',
    buyerType: 'Individual',
    location: 'Bengaluru, IN',
    budgetMin: 500000,
    budgetMax: 3000000,
    sectors: ['E-commerce', 'Logistics'],
    trackRecord: { dealsClosed: 2, notes: 'Ops heavy turnarounds' },
    preferences: 'Earn-out acceptable',
  },
  {
    id: 'b3',
    name: 'BluePeak Holdings',
    buyerType: 'Strategic',
    location: 'London, UK',
    budgetMin: 10000000,
    budgetMax: 50000000,
    sectors: ['Healthcare', 'Diagnostics'],
    trackRecord: { dealsClosed: 12, notes: 'Roll-ups' },
    preferences: 'Quick close, all-cash',
  },
];

let tasks: MatchTask[] = [
  { id: 't1', title: 'Share NDA', done: false },
  { id: 't2', title: 'Upload last 24 months financials', done: false },
  { id: 't3', title: 'Schedule intro call', done: true },
];

function delay<T>(value: T, ms = 400): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function listBuyers(): Promise<Buyer[]> {
  return delay(buyers);
}
export async function getBuyer(id: string): Promise<Buyer | undefined> {
  return delay(buyers.find((b) => b.id === id));
}
export async function acceptBuyer(id: string): Promise<{ ok: true }> {
  console.log('ACCEPT buyer', id);
  return delay({ ok: true }, 250);
}
export async function rejectBuyer(id: string): Promise<{ ok: true }> {
  console.log('REJECT buyer', id);
  return delay({ ok: true }, 250);
}

export async function listTasks(): Promise<MatchTask[]> {
  return delay(tasks, 250);
}
export async function toggleTask(id: string): Promise<MatchTask[]> {
  tasks = tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  return delay(tasks, 150);
}

export async function analyzeFinancials(file: File): Promise<string> {
  const summary =
    `Analyzed ${file.name} → Revenue growing ~18% YoY, gross margin 62%. ` +
    `Key risks: top-3 customers = 54% of revenue; churn 7%. ` +
    `Opportunities: expand mid-market, pricing optimization.\n` +
    `Recommendation: proceed to diligence.`;
  return delay(summary, 700);
}
