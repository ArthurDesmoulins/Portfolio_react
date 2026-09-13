import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// À placer une seule fois dans App.jsx, à l'intérieur du <BrowserRouter>.
// Il surveille l'URL : dès qu'il y a un #ancre (ex: /#contact), il scrolle
// jusqu'à l'élément qui a cet id, même si on arrive d'une autre page.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // On attend le prochain "tick" pour laisser la page (et ses sections)
      // le temps de s'afficher avant de calculer la position du scroll.
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
