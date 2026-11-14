import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("https:");
  return (
    <Link
      href={href}
      className={`text-link ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <ArrowUpRight aria-hidden="true" size={15} />
    </Link>
  );
}
