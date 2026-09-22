import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>
          <Link href="/">{SITE_NAME}</Link>
          {" — convert raw scores to scaled scores."}
        </p>
        <p className="footer-note">
          SAT® is a trademark registered by the College Board. ACT® is a
          trademark registered by ACT, Inc. AP® and PSAT® are trademarks
          registered by the College Board. LSAT® is a trademark of the Law
          School Admission Council. MCAT® is a trademark of the Association of
          American Medical Colleges. This site is not affiliated with those
          organizations and does not issue official score reports.
        </p>
      </div>
    </footer>
  );
}
