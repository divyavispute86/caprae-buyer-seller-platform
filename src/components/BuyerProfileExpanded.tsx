import React from 'react';
import { Buyer } from '../api/mock';
import { inr } from '../utils/currency';

export default function BuyerProfileExpanded({ buyer }: { buyer: Buyer }) {
  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>
        {buyer.name} <span className="badge">{buyer.buyerType}</span>
      </h2>

      <div className="row">
        <div className="col">
          <div className="label">Location</div>
          <div>{buyer.location}</div>
        </div>
        <div className="col">
          <div className="label">Budget</div>
          <div>{inr(buyer.budgetMin)} – {inr(buyer.budgetMax)}</div>
        </div>
        <div className="col">
          <div className="label">Sectors</div>
          <div>{buyer.sectors.join(', ')}</div>
        </div>
      </div>

      <hr className="sep" />

      <div className="row">
        <div className="col">
          <div className="label">Track Record</div>
          <div>{buyer.trackRecord.dealsClosed} closed — {buyer.trackRecord.notes}</div>
        </div>
        <div className="col">
          <div className="label">Preferences</div>
          <div>{buyer.preferences}</div>
        </div>
      </div>
    </div>
  );
}
