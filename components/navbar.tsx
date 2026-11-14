import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/portfolio";

export default function Navbar() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header container">
        <Link
          href="/"
          className="wordmark"
          aria-label="Rohith Pranav Bala, home"
        >
          <span className="brand-mark">
            rpb<span>.</span>
          </span>
          <span className="wordmark-caption">
            Engineering
            <br />& a little curiosity.
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#projects">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#about">About</Link>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a
            className="resume-link"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </header>
    </>
  );
}
