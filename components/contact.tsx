import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/portfolio";
import { ProjectLink } from "@/components/project-links";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Have a good problem?</p>
          <h2 id="contact-title">
            Let’s make
            <br />
            <em>something useful.</em>
          </h2>
          <p className="contact-description">
            I’m open to engineering, Developer Relations, and early-stage
            product roles.
            <br />
            Tell me what you’re building.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-aside">
          <div className="contact-signal" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>
            Good conversations
            <br />
            are where good products start.
          </p>
          <div className="contact-links">
            <ProjectLink href={profile.github}>GitHub</ProjectLink>
            <ProjectLink href={profile.linkedin}>LinkedIn</ProjectLink>
            <ProjectLink href={profile.resume}>Résumé</ProjectLink>
          </div>
        </div>
      </div>
    </section>
  );
}
