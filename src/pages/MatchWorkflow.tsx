import React from 'react';
import Pipeline from '../components/Pipeline';
import TaskChecklist from '../components/TaskChecklist';
import DocumentUploader from '../components/DocumentUploader';
import MessageThread from '../components/MessageThread';

export default function MatchWorkflow() {
  return (
    <div className="row">
      <div className="col" style={{ minWidth: 360 }}>
        <h2>Match Workflow</h2>
        <p className="muted">Move the deal from Intro → Close with guardrails.</p>
        <Pipeline current={2} />
        <TaskChecklist />
      </div>
      <div className="col" style={{ minWidth: 360 }}>
        <DocumentUploader />
        <MessageThread />
      </div>
    </div>
  );
}
