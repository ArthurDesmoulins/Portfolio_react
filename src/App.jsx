import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import ScrollToHash from "./ScrollToHash";
import { LanguageProvider } from "./components/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
