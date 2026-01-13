"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { en, zh, type Locale } from "@/locales"

type Lang = "en" | "zh"

interface LanguageContextValue {
  lang: Lang
  t: Locale
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null
    if (stored === "en" || stored === "zh") {
      setLangState(stored)
    }
    setMounted(true)
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem("lang", newLang)
  }

  const toggleLang = () => {
    const newLang = lang === "en" ? "zh" : "en"
    setLang(newLang)
  }

  const t = lang === "zh" ? zh : en

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ lang: "en", t: en, setLang, toggleLang }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ lang, t, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
