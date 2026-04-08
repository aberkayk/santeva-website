import Link from "next/link";
import { Container } from "@/components/shared/container";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-dark-bg text-white">
      <Container className="py-4 md:py-8 xl:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              {SITE.name}
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              {SITE.description}
            </p>
            <a
              href={SITE.amazonProductUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-full
                         font-semibold text-sm hover:bg-brand-dark transition-colors duration-300"
            >
              Our Amazon Store
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-brand transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-brand transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with care for your wellness.
          </p>
        </div>
      </Container>
    </footer>
  );
}
