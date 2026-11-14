import { experiences } from "@/lib/portfolio";
import { ProjectLink } from "@/components/project-links";
import Timeline from "@/components/timeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section container"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div className="section-index">
          <span>02</span>
          <p>Experience</p>
        </div>
        <div>
          <h2 id="experience-title">
            Small teams.
            <br />
            <em>Real responsibility.</em>
          </h2>
          <p>
            Shipping, teaching, and telling the story behind the technology.
          </p>
        </div>
        <ProjectLink href="/Full_Resume.pdf">Full résumé</ProjectLink>
      </div>
      <Timeline>
        {experiences.map((exp) => (
          <li
            className={`timeline-entry ${exp.id === "proqube" ? "highlight-entry" : ""}`}
            id={`experience-${exp.id}`}
            key={exp.id}
          >
            <span className="timeline-dot" aria-hidden="true" />
            <div className="experience-date">
              <time dateTime={exp.start}>{exp.dates}</time>
              <span>{exp.mode}</span>
            </div>
            <div className="experience-content">
              <div className="experience-heading">
                <h3>{exp.company}</h3>
                <p className="experience-title">{exp.title}</p>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet) => (
                  <li key={bullet}>
                    {bullet.includes("1 million views") ? (
                      <>
                        {bullet.split("1 million views")[0]}
                        <mark className="experience-metric">
                          1 million views
                        </mark>
                        {bullet
                          .split("1 million views")
                          .slice(1)
                          .join("1 million views")}
                      </>
                    ) : (
                      bullet
                    )}
                  </li>
                ))}
              </ul>
              <p className="experience-skills">{exp.skills}</p>
              {exp.links.length > 0 && (
                <div className="experience-links">
                  {exp.links.map((link) => (
                    <ProjectLink href={link.href} key={link.href}>
                      {link.label}
                    </ProjectLink>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </Timeline>
    </section>
  );
}
