import { Download } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Header() {
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
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects" className={linkClassName}>
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Hidden on mobile */}
              <NavigationMenuItem className="hidden sm:block">
                <NavigationMenuLink href="#skills" className={linkClassName}>
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden sm:block">
                <NavigationMenuLink href="#experience" className={linkClassName}>
                  Experience
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className={linkClassName}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right: Resume Download */}
        <a
          href="/resume/Chengwei_Wang_Resume.pdf"
          download
          className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/50 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-accent/40 hover:bg-muted hover:text-primary"
        >
          <Download className="size-3.5" />
          <span className="hidden sm:inline">Resume</span>
          <span className="sm:hidden">CV</span>
        </a>
      </div>
    </header>
  )
}
