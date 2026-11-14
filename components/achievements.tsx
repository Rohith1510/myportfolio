import { recognition } from "@/lib/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="recognition-title">
      <p className="eyebrow">04 / Recognition</p>
      <h2 id="recognition-title">A few milestones.</h2>
      <div className="recognition-list">
        {recognition.map((item) => (
          <a href={item.href} className="recognition-row" key={item.event}>
            <div>
              <p>{item.result}</p>
              <span>{item.event}</span>
            </div>
            <span className="recognition-year">
              {item.year}
              <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
      <p className="small-note">
        Track awards, wins, and finalist placements are listed separately.
      </p>
    </section>
  );
}
