import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="link-container">
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/about">
            About
          </Link>
          <Link className="link" href="/portofolio">
            Portofolio
          </Link>
        </div>
      </ul>
    </nav>
  );
}
