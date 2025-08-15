import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBuyer, Buyer, acceptBuyer, rejectBuyer } from '../api/mock';
import BuyerProfileExpanded from '../components/BuyerProfileExpanded';

export default function BuyerDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const [buyer, setBuyer] = useState<Buyer | undefined>();

  useEffect(() => {
    if (id) getBuyer(id).then(setBuyer);
  }, [id]);

  if (!buyer) return <div className="card">Loading…</div>;

  return (
    <div className="card">
      <BuyerProfileExpanded buyer={buyer} />
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button className="btn btn-accept" onClick={async () => { await acceptBuyer(buyer.id); nav('/match'); }}>
          Accept & Go to Match
        </button>
        <button className="btn btn-reject" onClick={async () => { await rejectBuyer(buyer.id); nav('/buyers'); }}>
          Reject
        </button>
        <button className="btn btn-outline" onClick={() => nav('/buyers')}>Back</button>
      </div>
    </div>
  );
}
