import { Link } from "react-router-dom";
import Header from "./components/Header";
import photoProfil from "./assets/photo-profil.png";
import { useLanguage } from "./components/LanguageContext";
import translations from "./components/translations";

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      {/* Main */}
      <main className="mx-auto max-w-5xl space-y-24 px-4 pt-10 pb-16">
        {/* Hero */}
        <section className="flex flex-col items-center gap-10 md:flex-row">
          <div className="w-full space-y-6 md:flex-[1.3]">
            <p className="text-xs font-medium tracking-[0.25em] text-emerald-400/80 uppercase">
              {t.hero.eyebrow}
            </p>
            <h1 className="text-3xl leading-tight font-semibold md:text-4xl lg:text-5xl">
              {t.hero.greeting}{" "}
              <span className="text-emerald-400">Arthur Desmoulins</span>
              <br />
              <span className="text-slate-300">{t.hero.role}</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              {t.hero.tagline1} <br />
              {t.hero.tagline2}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/projets"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
              >
                {t.hero.seeProjects}
              </Link>
              <a
                href="https://drive.google.com/file/d/1kLQLfiY_6Y7vRJmLKmdYnt1ErgVopTXr/view?usp=sharing"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium transition hover:border-emerald-400 hover:text-emerald-400"
              >
                {t.hero.downloadCV}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-slate-700/80 px-3 py-1">
                {t.hero.location}
              </span>
              <span className="rounded-full border border-slate-700/80 px-3 py-1">
                {t.hero.availability}
              </span>
            </div>
          </div>

          {/* Carte profil */}
          <div className="relative w-full md:flex-1">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
              <img
                src={photoProfil}
                alt="Photo de profil Arthur Desmoulins"
                className="mx-auto mb-4 h-50 w-53 rounded-3xl"
              />
              <h2 className="mb-1 text-center text-lg font-semibold">
                Arthur Desmoulins
              </h2>
              <p className="mb-4 text-center text-xs text-slate-400">
                {t.hero.cardRole}
              </p>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{t.contact.email}</span>
                  <a
                    href="mailto:arthur.desmoulins@etu.unilim.fr"
                    className="text-emerald-400 hover:underline"
                  >
                    arthur.desmoulins@etu.unilim.fr
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{t.contact.github}</span>
                  <a
                    href="https://github.com/ArthurDesmoulins"
                    className="text-emerald-400 hover:underline"
                  >
                    ArthurDesmoulins
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">{t.contact.linkedin}</span>
                  <a
                    href="https://www.linkedin.com/in/arthur-desmoulins-086067332"
                    className="text-emerald-400 hover:underline"
                  >
                    Arthur Desmoulins
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À propos */}
        <section id="about" className="space-y-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold md:text-2xl">
            <span className="h-7 w-1.5 rounded-full bg-emerald-400"></span>
            {t.about.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              {t.about.paragraph1}
            </p>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              {t.about.paragraph2}
            </p>
          </div>
        </section>

        {/* Compétences */}
        <section id="skills" className="space-y-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold md:text-2xl">
            <span className="h-7 w-1.5 rounded-full bg-emerald-400"></span>
            {t.skills.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">
                {t.skills.frontend}
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  HTML
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  CSS
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  JavaScript
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">
                {t.skills.multimedia}
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  Suite Adobe
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  Figma
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  Canva
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  LibreOffice
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  Photo / Vidéo & montage
                </span>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-sm font-semibold text-slate-100">
                {t.skills.softSkills}
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  {t.skills.autonomy}
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  {t.skills.teamwork}
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  {t.skills.curiosity}
                </span>
                <span className="rounded-full bg-slate-800/80 px-2.5 py-1">
                  {t.skills.rigor}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action vers projets */}
        <section className="flex flex-col gap-4 rounded-3xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-cyan-500/5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <h2 className="mb-1 text-lg font-semibold md:text-xl">
              {t.cta.title}
            </h2>
            <p className="text-sm text-slate-300">{t.cta.text}</p>
          </div>
          <Link
            to="/projets"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
          >
            {t.cta.button}
          </Link>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold md:text-2xl">
            <span className="h-7 w-1.5 rounded-full bg-emerald-400"></span>
            {t.contact.title}
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              {t.contact.text}
            </p>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-sm">
                <p className="mb-1 text-xs text-slate-400">{t.contact.email}</p>
                <a
                  href="mailto:arthur.desmoulins@etu.unilim.fr"
                  className="text-emerald-400 hover:underline"
                >
                  arthur.desmoulins@etu.unilim.fr
                </a>
              </div>
              <div className="text-sm">
                <p className="mb-1 text-xs text-slate-400">
                  {t.contact.linkedin}
                </p>
                <a
                  href="https://www.linkedin.com/in/arthur-desmoulins-086067332"
                  className="text-emerald-400 hover:underline"
                >
                  Arthur Desmoulins
                </a>
              </div>
              <div className="text-sm">
                <p className="mb-1 text-xs text-slate-400">
                  {t.contact.github}
                </p>
                <a
                  href="https://github.com/ArthurDesmoulins"
                  className="text-emerald-400 hover:underline"
                >
                  ArthurDesmoulins
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 md:flex-row">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.developedBy}</p>
        </div>
      </footer>
    </div>
  );
}
