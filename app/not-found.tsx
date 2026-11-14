import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="container case-study">
      <p className="eyebrow">404 / A wrong turn</p>
      <h1 style={{ fontSize: 48, marginBlock: 25 }}>This page isn’t here.</h1>
      <p>There’s more to explore in my selected work.</p>
      <Link href="/#projects" className="text-link" style={{ marginTop: 25 }}>
        Back to selected work →
      </Link>
    </main>
  );
}
