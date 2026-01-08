import Section from "../layout/Section";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Web3 Platform",
    period: "2022 — Present",
    summary:
      "Led frontend architecture and delivery for wallet and dApp experiences serving high-volume users across multiple blockchain networks.",
    highlights: [
      "Architected and shipped core wallet features with focus on security, performance, and user experience",
      "Established frontend patterns and component libraries adopted across multiple product teams",
      "Collaborated with product and design to iterate on complex Web3 interaction flows",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Product Studio",
    period: "2019 — 2022",
    summary:
      "Built reusable UI systems and delivered client-facing features across multiple product verticals on aggressive timelines.",
    highlights: [
      "Developed design system components used by 10+ internal applications",
      "Shipped features for high-traffic consumer products with strict performance budgets",
      "Worked closely with designers to refine component APIs and interaction patterns",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "SaaS Company",
    period: "2017 — 2019",
    summary:
      "Improved core workflows and performance for internal dashboards and customer-facing analytics tools.",
    highlights: [
      "Optimized rendering performance for data-heavy dashboards, reducing load times by 40%",
      "Built accessible forms and data visualization components",
      "Contributed to migration from legacy stack to modern React-based architecture",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <article
            key={`${experience.company}-${index}`}
            className="relative border-l-2 border-neutral-200 pl-6 dark:border-neutral-800"
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900" />

            <header className="mb-3">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {experience.role}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                {experience.company}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {experience.period}
              </p>
            </header>

            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              {experience.summary}
            </p>

            <ul className="space-y-2">
              {experience.highlights.map((highlight, hIndex) => (
                <li
                  key={hIndex}
                  className="flex gap-3 text-neutral-700 dark:text-neutral-300"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
