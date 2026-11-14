export default function Footer() {
  return (
    <footer className="site-footer container">
      <p>© {new Date().getFullYear()} Rohith Pranav Bala</p>
      <p>Built with care. A work in progress, always.</p>
      <a className="text-link" href="#">
        Back to top ↑
      </a>
    </footer>
  );
}
