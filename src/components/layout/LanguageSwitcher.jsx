import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import "../../styles/components/LanguageSwitcher.css";

const languages = [
  { code: "en", label: "English" },
  { code: "ko", label: "한국어" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const activeCode = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.documentElement.lang = activeCode;
  }, [activeCode]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    setOpen(false);
  };

  const current = languages.find((l) => l.code === activeCode) || languages[0];

  return (
    <div className="language-switcher" ref={ref}>
      <button
        type="button"
        className="language-switcher__button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Change language"
      >
        <Languages size={18} />
        <span>{current.code.toUpperCase()}</span>
        <span className="language-switcher__arrow">▾</span>
      </button>

      {open && (
        <div className="language-switcher__menu" role="listbox">
          {languages.map((language) => (
            <button
              type="button"
              key={language.code}
              role="option"
              aria-selected={language.code === current.code}
              className={`language-switcher__item ${
                language.code === current.code ? "active" : ""
              }`}
              onClick={() => changeLanguage(language.code)}
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
