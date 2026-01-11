"use client";
import { motion } from "motion/react";
import { sectionContainer, listStagger, sectionItem } from "@/lib/motion";

/**
 * Project media slot extension:
 * To add visuals for featured projects, populate the `media` field with a ReactNode.
 * The slot renders between header and description; only featured projects should use this.
 */

const projects: Array<{
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  links?: { live?: string; github?: string };
  media?: React.ReactNode;
}> = [
  {
    title: "Fundr",
    subtitle: "Web3 Crowdfunding Platform",
    description:
      "Addressed the trust gap in traditional crowdfunding by implementing milestone-based fund releases via smart contracts. Backers can verify fund usage on-chain, reducing disputes and enabling creators to build credibility. Resulted in 40% higher campaign completion rates during beta testing.",
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
      "Built for active DeFi traders frustrated by slow, gas-inefficient DEX interfaces. Implemented transaction batching and optimistic UI updates to cut perceived latency by 60%. Gas estimation logic reduced failed transactions by 35%, directly saving users on wasted fees.",
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
      "Solved data fragmentation for enterprise teams where analysts spent 3+ hours daily gathering metrics from disparate sources. Unified dashboards with sub-second query performance enabled same-day decision making. Adopted by 200+ internal users, reducing weekly reporting prep time from 8 hours to under 1.",
    techStack: ["Vue.js", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    links: {
      live: "#",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-24">
      <motion.div
        className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12"
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.header variants={sectionItem} className="mb-12 space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-secondary">
            Case Studies
          </p>
          <h2 className="text-2xl font-semibold leading-snug text-primary md:text-3xl">
            Projects
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-secondary">
            Real-world problems I've solved—from concept to production. Each project reflects my approach to building reliable, user-focused software.
          </p>
        </motion.header>

        <motion.div variants={listStagger} className="flex flex-col">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={sectionItem}
              className="mb-8 flex flex-col gap-4 rounded-lg border border-subtle bg-surface p-6 last:mb-0"
            >
              <header>
                <h3 className="text-base font-medium leading-normal text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-normal leading-relaxed text-primary">
                  {project.subtitle}
                </p>
              </header>

              {/* Media slot: renders only when project.media is defined */}
              {project.media}

              <p className="text-base font-normal leading-relaxed text-primary md:text-lg">
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
      </motion.div>
    </section>
  );
}

/**
 * Acceptance Criteria (User Perception):
 * 1. When scrolling, Projects section feels visually distinct and "heavier" than Skills/Experience without breaking overall consistency.
 * 2. The eyebrow "Case Studies" + description signals this is the portfolio's core showcase area.
 * 3. Increased vertical padding creates breathing room, making the section feel intentional and unhurried.
 */
