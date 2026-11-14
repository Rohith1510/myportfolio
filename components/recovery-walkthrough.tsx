"use client";
import { useState } from "react";

const steps = [
  {
    label: "01 Check in",
    title: "The owner stays in control.",
    state: "ACTIVE",
    body: "The owner checks in before the configured deadline. Deposits, withdrawals, and plan updates remain owner-controlled while active. A heartbeat can also cancel a pending recovery before authorization.",
  },
  {
    label: "02 Missed heartbeat",
    title: "Inactivity is a signal, not a release.",
    state: "ACTIVE · REQUEST ELIGIBLE",
    body: "After the heartbeat deadline, a recovery request becomes possible. The missed check-in does not prove death, authorize recovery, or transfer assets. Without a guardian quorum configured, recovery is disabled.",
  },
  {
    label: "03 Request",
    title: "A request starts a challenge window.",
    state: "RECOVERY_PENDING",
    body: "A recovery request freezes configuration and asset changes. Guardians can approve, while the owner has time to return and cancel the request. The challenge period and guardian quorum are independent safeguards.",
  },
  {
    label: "04 Authorize",
    title: "Both safeguards must be satisfied.",
    state: "RECOVERY_AUTHORIZED",
    body: "Only after guardian quorum and challenge expiry can recovery be authorized. The vault freezes the accounted asset snapshot and pins allocations. Monitoring and notifications cannot bypass these contract rules.",
  },
  {
    label: "05 Claim",
    title: "Beneficiaries claim on the agreed schedule.",
    state: "RELEASING → COMPLETED",
    body: "Authorized beneficiaries pull their claimable assets according to the release schedule. An accelerated emergency remainder requires an additional delay and a fresh guardian quorum; it uses the same allocation ledger.",
  },
];

export default function RecoveryWalkthrough() {
  const [step, setStep] = useState(0);
  return (
    <div
      className="recovery-walkthrough"
      aria-label="Explore Silent’s recovery safeguards"
    >
      <p className="eyebrow">Explore the recovery flow</p>
      <div className="recovery-buttons" aria-label="Recovery stages">
        {steps.map((item, i) => (
          <button
            type="button"
            key={item.label}
            aria-pressed={step === i}
            aria-controls="recovery-detail"
            onClick={() => setStep(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="recovery-state" aria-hidden="true">
        {steps.map((item, i) => (
          <span key={item.label} data-active={i <= step} />
        ))}
      </div>
      <div
        id="recovery-detail"
        className="recovery-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <h3>{steps[step].title}</h3>
        <p>{steps[step].body}</p>
        <p className="recovery-caption">{steps[step].state}</p>
      </div>
    </div>
  );
}
