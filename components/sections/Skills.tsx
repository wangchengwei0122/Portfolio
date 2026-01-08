"use client";
import { motion } from "motion/react";
import Section from "../layout/Section";
import { Code2, Server, Wrench, ShieldCheck, LucideIcon } from "lucide-react";
import { listStagger, sectionItem } from "@/lib/motion";

interface Skill {
  name: string;
  level?: "Advanced" | "Proficient" | "Familiar";
}

interface SkillGroupProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

function SkillItem({ skill }: { skill: Skill }) {
  const levelWidth = {
    Advanced: "w-full",
    Proficient: "w-4/5",
    Familiar: "w-3/5",
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <span className="text-base md:text-lg font-normal leading-relaxed text-primary">
          {skill.name}
        </span>
        {skill.level && (
          <span className="text-sm font-normal leading-relaxed text-primary">
            {skill.level}
          </span>
        )}
      </div>
      {skill.level && (
        <div className="h-1 rounded-full border border-subtle overflow-hidden">
          <div
            className={`h-full bg-surface ${levelWidth[skill.level]}`}
          />
        </div>
      )}
    </div>
  );
}

function SkillGroup({ title, icon: Icon, skills }: SkillGroupProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Icon className="size-5 text-primary" />
        <h3 className="text-base font-medium leading-normal text-primary">
          {title}
        </h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const skillGroups: SkillGroupProps[] = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Next.js", level: "Proficient" },
        { name: "Tailwind CSS", level: "Proficient" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: "Proficient" },
        { name: "FastAPI", level: "Proficient" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Python", level: "Proficient" },
      ],
    },
    {
      title: "Tools & Infrastructure",
      icon: Wrench,
      skills: [
        { name: "Git / GitHub", level: "Advanced" },
        { name: "Docker", level: "Proficient" },
        { name: "CI/CD", level: "Proficient" },
        { name: "Linux", level: "Proficient" },
      ],
    },
    {
      title: "Testing & Quality",
      icon: ShieldCheck,
      skills: [
        { name: "Vitest", level: "Proficient" },
        { name: "Playwright", level: "Proficient" },
        { name: "Unit & E2E Testing", level: "Advanced" },
        { name: "Code Review", level: "Advanced" },
      ],
    },
  ];

  return (
    <Section id="skills" title="Skills">
      <p className="text-base md:text-lg font-normal leading-relaxed text-primary">
        Technical foundation built through years of solving complex problems.
      </p>
      <motion.div
        variants={listStagger}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {skillGroups.map((group, index) => (
          <motion.div key={index} variants={sectionItem}>
            <SkillGroup {...group} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
