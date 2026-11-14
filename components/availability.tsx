import Link from "next/link";
export default function Availability() {
  return (
    <Link href="/#contact" className="availability-badge">
      <span aria-hidden="true" />
      Open to work
      <span className="availability-roles">
        Engineering & Developer Relations
      </span>
    </Link>
  );
}
