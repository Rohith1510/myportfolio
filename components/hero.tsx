import Availability from "@/components/availability";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HairlineFigure from "@/components/hairline-figure";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <Availability />
          <p className="hero-intro">
            <span className="intro-rule" aria-hidden="true" /> Rohith Pranav
            Bala <span>/ Engineering & DevRel</span>
          </p>
          <p className="hero-wins">7+ Hackathon Wins</p>
          <h1 id="hero-title">
            From first idea
            <br />
            to <em>real product.</em>
          </h1>
          <p className="hero-description">
            I build AI products and Web3 systems. At ProQube.AI, I helped ship
            Sourcerer in <strong>10 days</strong>—with{" "}
            <strong>1,000+ users</strong> onboarded in its first week.
          </p>
          <div className="hero-actions">
            <Button asChild className="primary-action">
              <Link href="#projects">
                View selected work <ArrowDown size={15} aria-hidden="true" />
              </Link>
            </Button>
            <a className="hero-contact" href="#contact">
              Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-location">
            <span aria-hidden="true" /> Coimbatore, India{" "}
            <span className="location-divider">/</span> Open to engineering &
            DevRel roles
          </p>
        </div>
        <div className="hero-art">
          <HairlineFigure
            name="assembly"
            number="01"
            title="Ideas are only the beginning."
            description="A small study in how the pieces come together."
          />
        </div>
      </div>
      <div className="launch-proof" aria-label="Sourcerer launch outcomes">
        <div className="proof-context">
          <span className="eyebrow">Production work / ProQube.AI</span>
          <p>
            Core engineer on{" "}
            <Link href="/projects/sourcerer">
              Sourcerer <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </p>
        </div>
        <div className="proof-metric">
          <strong>
            10<span> days</span>
          </strong>
          <p>from zero to production</p>
        </div>
        <div className="proof-metric">
          <strong>
            1,000<span>+</span>
          </strong>
          <p>users onboarded in week one</p>
        </div>
        <Link href="/projects/sourcerer" className="proof-link">
          Behind the launch <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
