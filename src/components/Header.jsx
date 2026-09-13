import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.projects, to: "/projets" },
    { label: t.nav.contact, to: "/#contact" },
  ];

  const linkClass = (to) =>
    pathname === to
      ? "text-emerald-400 font-medium"
      : "hover:text-emerald-400 transition";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          <span className="text-emerald-400">Arthur's</span> Portfolio
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bouton de langue */}
          <button
            onClick={toggleLanguage}
            className="rounded-lg border border-slate-700 px-2.5 py-1 text-xs font-medium transition hover:border-emerald-400 hover:text-emerald-400"
            aria-label="Changer de langue / Switch language"
          >
            {language === "fr" ? "EN" : "FR"}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-2 py-1 text-xs md:hidden"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={`md:hidden ${menuOpen ? "" : "hidden"} border-t border-slate-800 bg-slate-950`}
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 text-sm">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
