import { useLanguage } from "./LanguageContext";
import translations from "./translations";

export default function ProjectCard({ project }) {
  const { language } = useLanguage();
  const t = translations[language];

  const {
    date,
    title,
    description,
    tags,
    image,
    imageAlt,
    imageLink,
    primaryLink,
    secondaryLinks,
  } = project;

  return (
    <article className="group flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:flex-row">
      {/* Texte */}
      <div className="flex-1 space-y-3">
        <p className="text-xs tracking-[0.2em] text-emerald-400/80 uppercase">
          {date[language]}
        </p>

        <h3 className="text-base font-semibold transition group-hover:text-emerald-400 md:text-lg">
          {title[language]}
        </h3>

        <p className="text-sm text-slate-300">{description[language]}</p>

        <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
          {tags[language].map((tag) => (
            <span key={tag} className="rounded-full bg-slate-800/80 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs">
          <a
            href={primaryLink.url}
            className="text-emerald-400 hover:underline"
          >
            {t.linkLabels[primaryLink.type]}
          </a>

          {secondaryLinks.length > 0 && (
            <div className="ml-auto flex gap-4">
              {secondaryLinks.map((link) => (
                <a
                  key={link.type}
                  href={link.url}
                  className="text-slate-400 hover:underline"
                >
                  {t.linkLabels[link.type]}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image */}
      <a
        href={imageLink}
        className="h-40 w-full flex-shrink-0 overflow-hidden rounded-xl bg-slate-800 md:w-56"
      >
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>
    </article>
  );
}
