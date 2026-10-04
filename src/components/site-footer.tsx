import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Youtube } from "lucide-react";

import logo from "@/assets/darul-ilm-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative band-navy">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center rounded-md bg-background p-1.5">
              <img
                src={logo}
                alt="Darul-ilm Chatham logo"
                width={800}
                height={533}
                className="h-9 w-auto"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-md font-bold text-navy-foreground">
                Darul-ilm Community
              </span>
              <span className="block font-display text-sm italic text-accent">
                House of Knowledge
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/80">
            Learned in the classroom. Lived in the community. Serving Medway through faith, welfare
            and outreach.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl uppercase tracking-wide">Our Work</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/85">
            <li>
              <Link className="hover:text-accent" to="/halaqas">
                Spirituality
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/madrasa">
                Education
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/zakat">
                Medway Zakat Fund
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/food-bank">
                CHM Food Bank
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/family-support">
                Family &amp; Marriage Support
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/dawah">
                Da&apos;wah
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/media">
                Media
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/youth">
                Youth &amp; Children
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl uppercase tracking-wide">Get Involved</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/85">
            <li>
              <Link className="hover:text-accent" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/events">
                Events
              </Link>
            </li>
            <li>
              <a className="hover:text-accent" href="/get-involved#volunteer">
                Volunteer
              </a>
            </li>
            <li>
              <Link className="hover:text-accent" to="/donate">
                Donate
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/zakat">
                Give Zakat
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/food-bank">
                Get Support
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl uppercase tracking-wide">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/85">
            <li>
              Chatham Hill Mosque
              <br />
              22A Chatham Hill, Chatham ME5 7AA
            </li>
            <li>
              Mufti Didar Hasan (Chair):{" "}
              <a className="hover:text-accent" href="tel:07534979369">
                07534 979369
              </a>
            </li>
            <li>
              Administrator:{" "}
              <a className="hover:text-accent" href="tel:07778200746">
                07778 200746
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 hover:text-accent"
                href="mailto:Info@darulilmchatham.com"
              >
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 -translate-y-px" />
                Info@darulilmchatham.com
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 hover:text-accent"
                href="https://www.youtube.com/@darul-ilmchatham4240"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube aria-hidden="true" className="h-4 w-4 shrink-0 -translate-y-px" />
                YouTube channel
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 hover:text-accent"
                href="https://www.instagram.com/darulilmchatham?igsh=YmprMzRvZm1yM3pn"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram aria-hidden="true" className="h-4 w-4 shrink-0 -translate-y-px" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-navy-foreground/15 px-6 py-5 text-center text-xs text-navy-foreground/70">
        <span>© 2026 Darul-ilm Community, part of Darul-ilm Kent</span>
        <a className="hover:text-accent" href="https://school.darulilmkent.org">
          Madrasa website
        </a>
        <Link className="hover:text-accent" to="/policies">
          Our Policies
        </Link>
        <Link className="hover:text-accent" to="/privacy">
          Privacy notice
        </Link>
        <a className="hover:text-accent" href="/documents/Safeguarding%20Policy.pdf">
          Safeguarding
        </a>
      </div>
    </footer>
  );
}
