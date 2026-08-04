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

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setOpen(false);
  };

  const current =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="language-switcher" ref={ref}>
      <button
  className="language-switcher__button"
  onClick={() => setOpen(!open)}
>
  <Languages size={18} />
  <span>{current.code.toUpperCase()}</span>
  <span className="language-switcher__arrow">▾</span>
</button>

      {open && (
        <div className="language-switcher__menu">
          {languages.map((language) => (
            <button
              key={language.code}
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