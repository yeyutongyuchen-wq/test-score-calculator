import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="site-wordmark">
          {SITE_NAME}
        </Link>
        <nav className="header-nav" aria-label="Primary">
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}
