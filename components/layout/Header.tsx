"use client"

import { useState, useEffect } from "react"
import { Download, Sun, Moon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useLanguage } from "@/components/providers/LanguageProvider"

export default function Header() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { lang, t, toggleLang } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem("theme") || "dark"
    setIsDark(theme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark", !isDark)
    localStorage.setItem("theme", newTheme)
  }

  const linkClassName =
    "relative text-sm font-medium leading-normal text-primary transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100"

  return (
    <header className="sticky top-0 z-50 border-b border-subtle bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
        {/* Left: Navigation */}
        <nav aria-label="Primary">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-4 md:gap-6">
              {/* Always visible */}
              <NavigationMenuItem>
                <NavigationMenuLink href="#hero" className={linkClassName}>
                  {t.header.nav.home}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects" className={linkClassName}>
                  {t.header.nav.projects}
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Hidden on mobile */}
              <NavigationMenuItem className="hidden sm:block">
                <NavigationMenuLink href="#skills" className={linkClassName}>
                  {t.header.nav.skills}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden sm:block">
                <NavigationMenuLink href="#experience" className={linkClassName}>
                  {t.header.nav.experience}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className={linkClassName}>
                  {t.header.nav.contact}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right: Language + Theme Toggle + Resume Download */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            aria-label={lang === "en" ? "Switch to Chinese" : "Switch to English"}
            className="flex h-9 items-center justify-center rounded-md border border-border/60 bg-muted/50 px-2.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-accent/40 hover:bg-muted hover:text-primary"
          >
            {mounted ? (
              <span>
                <span className={lang === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
                <span className="mx-1 text-border">/</span>
                <span className={lang === "zh" ? "text-primary" : "text-muted-foreground"}>中</span>
              </span>
            ) : (
              <span>EN / 中</span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex size-9 items-center justify-center rounded-md border border-border/60 bg-muted/50 text-secondary-foreground transition-colors hover:border-accent/40 hover:bg-muted hover:text-primary"
          >
            {mounted ? (
              isDark ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )
            ) : (
              <span className="size-4" />
            )}
          </button>

          {/* Resume Download */}
          <a
            href="/resume/Chengwei_Wang_Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/50 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-accent/40 hover:bg-muted hover:text-primary"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">{t.header.resume}</span>
            <span className="sm:hidden">{t.header.resumeShort}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
