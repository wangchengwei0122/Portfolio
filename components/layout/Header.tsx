import { navItems } from "../navigation/navItems";

export default function Header() {
  return (
    <header>
      <nav aria-label="Primary">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="text-primary hover:text-accent focus-visible:ring-2 focus-visible:ring-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
