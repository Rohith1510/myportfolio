import Image from "next/image";
import { ProjectLink } from "@/components/project-links";
import HairlineFigure from "@/components/hairline-figure";

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-index">
          <span>03</span>
          <p>A little context</p>
        </div>
        <div className="about-grid">
          <div className="about-art">
            <h2 id="about-title">
              Always building.
              <br />
              <em>Always taking notes.</em>
            </h2>
            <HairlineFigure
              name="fieldnotes"
              number="02"
              title="A place for the next question."
              description="Research, make, explain. Repeat."
              compact
            />
          </div>
          <div className="about-copy">
            <div className="about-person">
              <Image
                src="/my_Img.jpg"
                alt="Rohith Pranav Bala"
                width={84}
                height={84}
                sizes="84px"
              />
              <div>
                <h3>Hi, I’m Rohith.</h3>
                <p>Engineer, developer advocate, and technical storyteller.</p>
              </div>
            </div>
            <p className="about-lead">
              I enjoy the space between “what if?” and something you can
              actually use.
            </p>
            <p>
              I work across product engineering, AI, and Web3, and I’m
              interested in Developer Relations roles that connect building with
              developer education and community. Hackathons taught me to decide
              and ship under a deadline. Production work taught me to care just
              as much about what happens after launch.
            </p>
            <p>
              I also research and write technology stories for RuntimeBRT, and
              teach blockchain part-time. Building something and explaining it
              clearly both begin with asking better questions.
            </p>
            <div id="skills" className="skills-note">
              <p className="eyebrow">Tools I reach for</p>
              <p>
                TypeScript · React · Next.js · Python · SQL
                <br />
                REST APIs · Solidity · LLM integrations
              </p>
            </div>
            <div id="education" className="education-note">
              <p className="eyebrow">Education / 2022—2026</p>
              <h3>B.E. in Computer Science and Engineering</h3>
              <p>Dr. N.G.P. Institute of Technology, Coimbatore</p>
              <ProjectLink href="/Full_Resume.pdf">
                View credentials
              </ProjectLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
