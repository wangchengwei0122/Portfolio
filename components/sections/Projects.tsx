import Section from "../layout/Section";

const projects = [
  {
    title: "Fundr",
    subtitle: "Web3 Crowdfunding Platform",
    description:
      "A decentralized crowdfunding platform enabling creators to launch campaigns with transparent fund management through smart contracts. Built with modern web3 tooling for seamless wallet integration and on-chain governance.",
    techStack: ["Next.js", "TypeScript", "Solidity", "Ethers.js", "IPFS"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "DEX Frontend",
    subtitle: "Decentralized Exchange UI",
    description:
      "High-performance trading interface for a decentralized exchange. Features real-time price feeds, advanced order types, and optimized transaction flows to reduce gas costs and improve user experience.",
    techStack: ["React", "TypeScript", "Web3.js", "Chart.js", "TailwindCSS"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    title: "Enterprise Data Platform",
    subtitle: "Business Intelligence Dashboard",
    description:
      "Comprehensive data visualization platform for enterprise users, providing actionable insights through customizable dashboards, advanced search, and real-time analytics on company data.",
    techStack: ["Vue.js", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    links: {
      live: "#",
    },
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <header>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {project.subtitle}
              </p>
            </header>

            <p className="text-neutral-700 dark:text-neutral-300">
              {project.description}
            </p>

            <div className="mt-auto">
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.links && (
                <div className="mt-4 flex gap-3 text-sm">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
                    >
                      View Live
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="text-neutral-900 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
