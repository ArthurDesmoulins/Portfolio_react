import { Link } from "react-router-dom";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";
import { useLanguage } from "./components/LanguageContext";
import translations from "./components/translations";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto max-w-5xl space-y-12 px-4 pt-10 pb-16">
        {/* Intro */}
        <section className="space-y-4">
          <p className="text-xs font-medium tracking-[0.25em] text-emerald-400/80 uppercase">
            {t.projectsPage.eyebrow}
          </p>
          <h1 className="text-2xl font-semibold md:text-3xl">
            {t.projectsPage.titlePrefix}{" "}
            <span className="text-emerald-400">
              {t.projectsPage.titleHighlight}
            </span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            {t.projectsPage.intro}
          </p>
        </section>

        {/* Liste des projets */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold md:text-xl">
            {t.projectsPage.listTitle}
          </h2>

          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.title.fr} project={project} />
            ))}
          </div>
        </section>

        {/* Lien de retour */}
        <section>
          <Link
            to="/"
            className="inline-flex items-center text-sm text-emerald-400 hover:underline"
          >
            {t.projectsPage.backHome}
          </Link>
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
