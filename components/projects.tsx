import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, archive } from "@/lib/portfolio";
import { ProjectLink } from "@/components/project-links";

export default function Projects() {
  const [silent, sourcerer, promptora, aidnet] = projects;
  return (
    <section
      id="projects"
      className="work-section container"
      aria-labelledby="work-title"
    >
      <div className="section-heading">
        <div className="section-index">
          <span>01</span>
          <p>Selected work</p>
        </div>
        <div>
          <h2 id="work-title">
            A few ideas
            <br />
            that <em>made it out.</em>
          </h2>
          <p>
            Real products. Clear ownership.
            <br />A look at what I built, and why it mattered.
          </p>
        </div>
      </div>
      <article className="sourcerer-feature">
        <Image
          className="sourcerer-mark"
          src="/Sourcerer_logo.jpg"
          alt="Sourcerer logo"
          width={76}
          height={76}
        />
        <div className="sourcerer-story">
          <p className="project-status-label">Deprecated by the organization</p>
          <p className="project-meta">
            PROQUBE.AI / AI TALENT SOURCING / 2025—26
          </p>
          <h3>
            <Link href="/projects/sourcerer">The ten-day launch.</Link>
          </h3>
          <p>
            {sourcerer.summary} I also built customer workflows, backend
            services, and APIs for the AAFN B2B marketplace.
          </p>
          <div className="project-actions">
            <ProjectLink href="/projects/sourcerer">
              Read the launch story
            </ProjectLink>
            <span className="role-note">Core engineer · Team launch</span>
          </div>
        </div>
        <div className="sourcerer-outcome">
          <span className="eyebrow">The outcome</span>
          <p>
            A first version.
            <br />A thousand first users.
          </p>
          <Link
            href="/projects/sourcerer"
            aria-label="Read Sourcerer’s launch story"
          >
            <ArrowUpRight size={27} aria-hidden="true" />
          </Link>
        </div>
      </article>
      <div className="project-duet">
        {[silent, promptora].map((project, index) => (
          <article
            key={project.slug}
            className={`work-item work-item-${project.slug}`}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="work-image"
              aria-label={`Read the ${project.name} case study`}
            >
              <div className="work-image-top">
                <span>
                  0{index + 2} / {project.name}
                </span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </div>
              <Image
                src={project.image!}
                alt={project.imageAlt!}
                width={project.slug === "silent" ? 1440 : 1600}
                height={project.slug === "silent" ? 1000 : 900}
                sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 650px"
              />
            </Link>
            <div className="work-item-heading">
              <h3>
                <Link href={`/projects/${project.slug}`}>{project.name}</Link>
              </h3>
              <span className="project-meta">
                {project.context} / {project.year}
              </span>
            </div>
            <p className="work-summary">{project.summary}</p>
            <p className="project-result">{project.outcome}</p>
            <p className="work-stack">{project.stack.join(" / ")}</p>
            <div className="project-actions">
              <ProjectLink href={`/projects/${project.slug}`}>
                Case study
              </ProjectLink>
              <ProjectLink href={project.links[0].href}>
                {project.links[0].label}
              </ProjectLink>
            </div>
          </article>
        ))}
      </div>
      <article className="aidnet-row">
        <Link
          href="/projects/aidnet"
          className="aidnet-image"
          aria-label="Read the AidNet case study"
        >
          <Image
            src={aidnet.image!}
            alt={aidnet.imageAlt!}
            width={1891}
            height={825}
            sizes="(max-width: 700px) 35vw, 235px"
          />
        </Link>
        <div>
          <p className="project-meta">04 / ETHINDIA 2024 · RESCUE CHAIN</p>
          <h3>
            <Link href="/projects/aidnet">
              AidNet <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </h3>
          <p>{aidnet.summary}</p>
        </div>
        <div className="aidnet-links">
          <span className="project-result">ETHIndia 2024 finalist</span>
          <ProjectLink href="/projects/aidnet">Case study</ProjectLink>
          <ProjectLink href={aidnet.links[0].href}>Source</ProjectLink>
        </div>
      </article>
      <div className="archive">
        <div className="archive-heading">
          <h3>Elsewhere on the workbench</h3>
          <span className="eyebrow">Smaller builds & experiments</span>
        </div>
        {archive.map((item) => (
          <a
            className="archive-row"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            key={item.name}
          >
            <span className="archive-name">{item.name}</span>
            <span className="archive-note">{item.note}</span>
            <span className="archive-stack">{item.stack}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ))}
        <a
          className="archive-all text-link"
          href="https://github.com/Rohith1510?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          More on GitHub <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
