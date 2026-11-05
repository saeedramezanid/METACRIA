"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_LANG, dirOf, seo, type Lang, type Text } from "./content";

const STORAGE_KEY = "nexora-lang";

type LanguageValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (value: Text) => string;
};

const LanguageContext = createContext<LanguageValue | null>(null);

function readStored(): Lang | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "fa" || stored === "en" ? stored : null;
  } catch {
    return null;
  }
}

function persist(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* private mode — the site still works, it just forgets the choice */
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  // Storage is written only when the user picks a language. Writing it from an
  // effect on [lang] would store the server default over the saved choice
  // before this restore commit lands.
  useEffect(() => {
    const stored = readStored();
    if (stored) setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dirOf(lang);
    document.title = seo[lang].title;
  }, [lang]);

  const changeLang = useCallback((next: Lang) => {
    persist(next);
    setLang(next);
  }, []);

  const toggle = useCallback(
    () => changeLang(lang === "fa" ? "en" : "fa"),
    [changeLang, lang],
  );

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      dir: dirOf(lang),
      setLang: changeLang,
      toggle,
      t: (text) => text[lang],
    }),
    [lang, changeLang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang must be used inside LanguageProvider");
  return context;
}
