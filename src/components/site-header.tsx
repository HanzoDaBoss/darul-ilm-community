import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import logo from "@/assets/darul-ilm-logo.png";
import whatsAppBtn from "@/assets/whatsapp.png";

const navPrimary = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/halaqas", label: "Spirituality" },
  { to: "/madrasa", label: "Education" },
  { to: "/zakat", label: "Zakat Fund" },
  { to: "/food-bank", label: "Food Bank" },
  { to: "/family-support", label: "Family and Marriage Support" },
  { to: "/dawah", label: "Da'wah" },
  { to: "/media", label: "Media" },
  { to: "/youth", label: "Youth and Children" },
] as const;

const navSecondary = [
  { to: "/events", label: "What's on" },
  { to: "/get-involved", label: "Get involved" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact Us" },
  { to: "/blog", label: "Blogs" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuMounted(true);
    setMenuClosing(false);
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
    setMenuClosing(true);
    closeTimer.current = setTimeout(() => {
      setMenuMounted(false);
      setMenuClosing(false);
    }, 280);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Darul-ilm Chatham logo"
              width={800}
              height={533}
              className="h-10 w-auto sm:h-11"
            />
            <span className="leading-tight">
              <span className="block font-display text-base font-bold text-navy sm:text-xl">
                Darul-ilm Community
              </span>
              <span className="block font-display text-xs italic text-muted-foreground sm:text-sm">
                House of Knowledge
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={openMenu}
            aria-expanded={open}
            aria-label="Open menu"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-semibold uppercase tracking-wide text-navy sm:px-4"
          >
            <Menu className="h-5 w-5" />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </header>

      <a
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-3 py-2 text-sm font-semibold shadow-md"
        aria-label="Chat on WhatsApp"
        href="https://wa.me/447778020745"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="" src={whatsAppBtn} className="h-7 w-7 object-contain" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {menuMounted && (
        <div className={`nav-overlay-fade fixed inset-0 z-50 ${menuClosing ? "nav-closing" : ""}`}>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute inset-0 bg-navy/50"
          />
          <nav
            className={`nav-slide-in absolute inset-y-0 right-0 flex h-full w-full max-w-md flex-col overflow-y-auto bg-sky-soft px-6 py-6 text-navy shadow-2xl sm:px-8 ${menuClosing ? "nav-panel-closing" : ""}`}
          >
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center self-start rounded-full border border-navy/20 text-navy"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {[navPrimary, navSecondary].map((group, i) => (
                <ul key={i} className="space-y-4">
                  {group.map((item) => (
                    <li key={item.to}>
                      <a
                        href={item.to}
                        onClick={closeMenu}
                        className="block font-display text-lg font-bold uppercase tracking-wide text-navy hover:underline"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="flex flex-col gap-1 sm:gap-3 mt-auto">
              <a
                href="https://school.darulilmkent.org"
                target="_blank"
                rel="noreferrer"
                className="btn-pill mt-10 w-full text-center"
              >
                Children&apos;s madrasa website
              </a>
              <a
                href="/get-involved#volunteer"
                onClick={closeMenu}
                className="btn-pill-ghost mt-3 w-full text-center"
              >
                Become a volunteer
              </a>
            </div>
            {/* <a
              href="/classes#apply"
              onClick={() => setOpen(false)}
              className="btn-pill mt-10 w-full text-center sm:mt-auto"
            >
              Apply for a Place
            </a> */}
          </nav>
        </div>
      )}
    </>
  );
}
