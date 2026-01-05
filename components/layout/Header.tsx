import { navItems } from "../navigation/navItems";

export default function Header() {
  return (
    <header>
      <nav aria-label="Primary">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
