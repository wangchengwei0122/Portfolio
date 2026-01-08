import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const linkClassName =
    "relative text-base font-medium leading-normal text-primary transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100";

  return (
    <header className="sticky top-0 z-50 border-b border-subtle bg-canvas/90 backdrop-blur">
      <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12 py-4">
        <nav aria-label="Primary">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink href="#hero" className={linkClassName}>
                  Hero
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#skills" className={linkClassName}>
                  Skills
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#projects" className={linkClassName}>
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
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
      </div>
    </header>
  );
}
