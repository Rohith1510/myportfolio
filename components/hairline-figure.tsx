"use client";
import { useEffect, useRef, useState } from "react";

type FigureInstance = { set: (value: number) => void; destroy: () => void };
type FigureDefinition = {
  name: string;
  range: [number, number, number];
  tour: ([number, number] | null)[];
  mount: (
    host: { stage: HTMLElement; svg: SVGSVGElement; read: HTMLElement },
    value: number,
  ) => FigureInstance;
};
type Runtime = {
  HL: {
    inject: (root: Document) => void;
    mk: (
      tag: string,
      attrs: Record<string, string>,
      parent: HTMLElement,
    ) => SVGSVGElement;
    tour: (
      stage: HTMLElement,
      stops: FigureDefinition["tour"],
      onStop: (index: number) => void,
    ) => { stop: () => void };
  };
  figures: Record<string, FigureDefinition>;
};
declare global {
  interface Window {
    PortfolioHairline?: Runtime;
  }
}
let runtimePromise: Promise<Runtime> | undefined;
function loadRuntime(): Promise<Runtime> {
  if (window.PortfolioHairline)
    return Promise.resolve(window.PortfolioHairline);
  if (runtimePromise) return runtimePromise;
  runtimePromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/figures/portfolio-figures.js";
    script.async = true;
    script.onload = () =>
      window.PortfolioHairline
        ? resolve(window.PortfolioHairline)
        : reject(new Error("Figure runtime unavailable"));
    script.onerror = () => {
      script.remove();
      runtimePromise = undefined;
      reject(new Error("Figure could not load"));
    };
    document.head.append(script);
  });
  return runtimePromise;
}
export default function HairlineFigure({
  name,
  number,
  title,
  description,
  compact = false,
}: {
  name: "assembly" | "fieldnotes";
  number: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  const stage = useRef<HTMLDivElement>(null),
    read = useRef<HTMLOutputElement>(null);
  const [ready, setReady] = useState(false),
    [failed, setFailed] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};
    loadRuntime().then((loaded) => {
      if (cancelled || !stage.current || !read.current) return;
      const host = stage.current;
      loaded.HL.inject(document);
      const figure = loaded.figures[name];
      host.setAttribute("data-hairline", name);
      const svg = loaded.HL.mk("svg", { viewBox: "0 0 400 320", "aria-hidden": "true" }, host);
      const instance = figure.mount({ stage: host, svg, read: read.current }, figure.range[1]);
      let visible = false;
      let tour: { stop: () => void } | undefined;
      const update = () => {
        tour?.stop();
        tour = undefined;
        if (visible && !document.hidden && !preference.matches) {
          // Hairline loops the tour and yields to pointer or keyboard focus.
          tour = loaded.HL.tour(host, figure.tour, () => {});
        }
      };
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        update();
      }, { threshold: 0.15 });
      observer.observe(host);
      preference.addEventListener("change", update);
      document.addEventListener("visibilitychange", update);
      dispose = () => {
        observer.disconnect();
        preference.removeEventListener("change", update);
        document.removeEventListener("visibilitychange", update);
        tour?.stop();
        instance.destroy();
        svg.remove();
      };
      setReady(true);
    }).catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; dispose(); };
  }, [name]);
  return (
    <figure
      className={`hairline-figure ${compact ? "figure-compact" : ""}`}
      aria-label={`${name === "assembly" ? "Assembly" : "Fieldnotes"} interactive isometric figure`}
    >
      <div className="figure-label">
        <span>
          FIG. {number} / {name}
        </span>
        <output ref={read} className="figure-readout" aria-live="off">
          rest
        </output>
      </div>
      <div
        ref={stage}
        className="hairline-stage"
        data-figure={name}
        tabIndex={0}
        aria-label="Interactive figure. Focus to pause automatic motion; move the pointer to explore."
      />
      {!ready && (
        <span className="figure-loading">
          {failed
            ? "The figure is taking a moment. Try reloading."
            : "Loading figure…"}
        </span>
      )}
      <figcaption>
        <strong>{title}</strong>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}
