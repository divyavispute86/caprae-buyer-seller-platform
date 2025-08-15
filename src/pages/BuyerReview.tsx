import React, { useEffect, useState } from 'react';
import { listBuyers, acceptBuyer, rejectBuyer, Buyer } from '../api/mock';
import BuyerCard from '../components/BuyerCard';
import { useNavigate } from 'react-router-dom';

export default function BuyerReview() {
  const [buyers, setBuyers] = useState<Buyer[]>([]);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    listBuyers().then((b) => { setBuyers(b); setLoading(false); });
  }, []);

  async function accept(id: string) {
    await acceptBuyer(id);
    alert('Accepted! (mock)');
  }
  async function reject(id: string) {
    await rejectBuyer(id);
    setBuyers((bs) => bs.filter((b) => b.id !== id));
  }

  if (loading) return <div className="card">Loading buyers…</div>;

  return (
    <div>
      <h2>Buyer Feed</h2>
      <p className="muted">Sellers swipe (accept/reject) style — like Bumble.</p>
      <div className="row">
        {buyers.map((b) => (
          <div key={b.id} className="col">
            <BuyerCard buyer={b} onAccept={accept} onReject={reject} onOpen={(id) => nav(`/buyers/${id}`)} />
          </div>
        ))}
      </div>
    </div>
  );
}
