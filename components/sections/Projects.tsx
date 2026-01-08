"use client";
import { motion } from "motion/react";
import Section from "../layout/Section";
import { listStagger, sectionItem } from "@/lib/motion";

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
      <motion.div
        variants={listStagger}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={sectionItem}
            className="flex flex-col gap-4 rounded-lg border border-subtle bg-surface p-6"
          >
            <header>
              <h3 className="text-base font-medium leading-normal text-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-sm font-normal leading-relaxed text-primary">
                {project.subtitle}
              </p>
            </header>

            <p className="text-base md:text-lg font-normal leading-relaxed text-primary">
              {project.description}
            </p>

            <div className="mt-auto space-y-4">
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded border border-subtle px-2 py-2 text-sm font-normal leading-relaxed text-primary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.links && (
                <div className="flex gap-4 text-sm font-normal leading-relaxed">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="text-accent underline underline-offset-4"
                    >
                      View Live
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="text-accent underline underline-offset-4"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
