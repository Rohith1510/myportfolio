import { publications } from "@/lib/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" aria-labelledby="publications-title">
      <p className="eyebrow">05 / Research</p>
      <h2 id="publications-title">Thinking in public.</h2>
      <div className="publication-list">
        {publications.map((paper) => (
          <article key={paper.href}>
            <p className="project-meta">
              {paper.publisher} / {paper.year}
            </p>
            <h3>
              <a href={paper.href} target="_blank" rel="noopener noreferrer">
                {paper.title}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </h3>
            <p>{paper.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
