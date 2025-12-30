import { useState } from "react";
import DownloadCVButton from "./DownloadCVButton.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";

const links = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <nav className="container-responsive flex items-center justify-between h-14">
        <a href="#home" className="font-bold text-xl text-brand dark:text-white">Md. Fokhrul Islam</a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-gray-700 dark:text-white hover:text-blue-600"
            >
              {l.label}
            </a>
          ))}
          <DownloadCVButton />
          <DarkModeToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white text-xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="block text-sm text-gray-700 dark:text-white hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <DownloadCVButton />
        </div>
      )}
    </header>
  );
}
