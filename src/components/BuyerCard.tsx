import React from 'react';
import { Buyer } from '../api/mock';
import { inr } from '../utils/currency';

type Props = {
  buyer: Buyer;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onOpen: (id: string) => void;
};

export default function BuyerCard({ buyer, onAccept, onReject, onOpen }: Props) {
  return (
    <div className="card" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, background: '#e0e7ff',
        display: 'grid', placeItems: 'center', fontWeight: 800
      }}>
        {buyer.name[0]}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ fontWeight: 800 }}>{buyer.name}</div>
          <span className="badge">{buyer.buyerType}</span>
          <span style={{ color: '#64748b' }}>{buyer.location}</span>
        </div>
        <div style={{ marginTop: 6, color: '#0f172a' }}>
          Budget: {inr(buyer.budgetMin)} – {inr(buyer.budgetMax)} · Sectors: {buyer.sectors.join(', ')}
        </div>
        <div style={{ marginTop: 4, color: '#64748b', fontSize: 14 }}>
          {buyer.trackRecord.dealsClosed} deals closed · {buyer.trackRecord.notes}
        </div>

        <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
          <button className="btn btn-accept" onClick={() => onAccept(buyer.id)}>Accept</button>
          <button className="btn btn-reject" onClick={() => onReject(buyer.id)}>Reject</button>
          <button className="btn btn-outline" onClick={() => onOpen(buyer.id)}>View</button>
        </div>
      </div>
    </div>
  );
}
