import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr"); // "fr" ou "en"

  const toggleLanguage = () => {
    setLanguage((current) => (current === "fr" ? "en" : "fr"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook à utiliser dans n'importe quel composant pour lire la langue courante
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage doit être utilisé à l'intérieur de <LanguageProvider>",
    );
  }
  return context;
}
