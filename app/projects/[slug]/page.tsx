import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { ProjectLink } from "@/components/project-links";
import RecoveryWalkthrough from "@/components/recovery-walkthrough";
import { projects } from "@/lib/portfolio";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.name} · Rohith Pranav Bala`,
      description: project.summary,
      url: `/projects/${slug}`,
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  return (
    <>
      <Navbar />
      <main id="main-content">
        <article className="case-study container">
          <div className="case-back">
            <ProjectLink href="/#projects">Back to selected work</ProjectLink>
          </div>
          <header className="case-header">
            {slug === "sourcerer" && (
              <Image className="case-project-logo" src="/Sourcerer_logo.jpg" alt="Sourcerer logo" width={76} height={76} priority />
            )}
            <p className="eyebrow">
              {project.name} / {project.context} / {project.year}
            </p>
            <h1>{project.headline}</h1>
            <p>{project.summary}</p>
            {project.status && (
              <aside className="project-status" aria-label="Project status">
                <strong>{project.status}</strong>
                <p>
                  Sourcerer has been deprecated by ProQube.AI. This case study
                  documents my contributions and the original launch outcomes.
                </p>
              </aside>
            )}
            <div className="project-actions">
              {project.links.map((link) => (
                <ProjectLink key={link.href} href={link.href}>
                  {link.label}
                </ProjectLink>
              ))}
            </div>
          </header>
          <dl className="case-facts">
            <div>
              <dt>My role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>{project.stack.join(" · ")}</dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>{project.outcome}</dd>
            </div>
          </dl>
          {project.image && (
            <figure className="case-image">
              <Image
                src={project.image}
                alt={project.imageAlt!}
                width={1440}
                height={project.slug === "silent" ? 1000 : 810}
                sizes="(max-width: 768px) 100vw, 1100px"
                priority
              />
              <figcaption>{project.imageCaption}</figcaption>
            </figure>
          )}
          <div className="case-body">
            {project.story.map((section, i) => (
              <section
                key={section.title}
                className={
                  i === project.story.length - 1 ? "case-result" : undefined
                }
              >
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            {project.slug === "silent" && (
              <>
                <h2>The recovery flow</h2>
                <p style={{ marginBottom: 22 }}>
                  A missed heartbeat opens a path to a request. Guardian
                  approval and a challenge window still stand between that
                  request and a release.
                </p>
                <RecoveryWalkthrough />
                <div className="project-actions">
                  <ProjectLink href="https://github.com/Rohith1510/silent/tree/main/docs/partner-integrations">
                    Integration evidence
                  </ProjectLink>
                  <ProjectLink href="https://github.com/Rohith1510/silent/blob/main/contracts/SilentSovereignVault.sol">
                    Recovery contract
                  </ProjectLink>
                </div>
              </>
            )}
            <nav className="case-next" aria-label="More project stories">
              <ProjectLink href="/#projects">All selected work</ProjectLink>
              <ProjectLink href={`/projects/${next.slug}`}>
                Next: {next.name}
              </ProjectLink>
            </nav>
          </div>
        </article>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
