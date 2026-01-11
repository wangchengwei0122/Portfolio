"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { heroContainer, heroItem } from "@/lib/motion"

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center">
      <div className="w-full max-w-4xl mx-auto  px-6 py-20 md:px-8 lg:px-12">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.6, once: true }}
          className="space-y-10"
        >
          {/* Eyebrow - 定位标识 */}
          <motion.p
            variants={heroItem}
            className="text-sm font-medium tracking-wide text-muted-foreground"
          >
            Frontend Systems Engineer
          </motion.p>

          {/* Headline - 核心价值主张 */}
          <motion.h1
            variants={heroItem}
            className="text-4xl font-semibold leading-[1.15] tracking-tight text-primary md:text-5xl lg:text-6xl"
          >
            I build interfaces
            <br />
            for{" "}
            <span className="relative inline-block">
              complex systems
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent/60" />
            </span>
            .
          </motion.h1>

          {/* Supporting Copy - 能力证明 */}
          <motion.div
            variants={heroItem}
            className="max-w-xl space-y-4 text-base leading-relaxed text-secondary-foreground md:text-lg"
          >
            <p>
              5 years shipping production frontends—trading platforms, real-time dashboards,
              data-intensive enterprise tools.
            </p>
            <p>I turn ambiguous requirements into systems that scale.</p>
          </motion.div>

          {/* CTA Group */}
          <motion.div variants={heroItem} className="flex items-center gap-6 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-secondary-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              About Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - 极简 */}
      <motion.div
        variants={heroItem}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.6, once: true }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-px bg-border" />
      </motion.div>
    </section>
  )
}

/**
 * ═══════════════════════════════════════════════════════════
 * Hero 信息层级设计
 * ═══════════════════════════════════════════════════════════
 *
 * 1. Eyebrow「Frontend Systems Engineer」
 *    - 用 muted-foreground，不抢视线
 *    - "Systems" 暗示复杂度，区别于普通前端
 *    - 没有 "Senior"——让作品说话
 *
 * 2. Headline「I build interfaces for complex systems.」
 *    - 两行断句，呼吸感
 *    - "complex systems" 是关键词：暗示 Infra 级别的工程能力
 *    - 没有 buzzword，没有技术栈罗列
 *    - 主语是 "I"，但语气是陈述事实，不是自夸
 *
 * 3. Supporting Copy
 *    - 两段短句，不堆砌
 *    - 第一段：具体领域（trading / dashboard / enterprise）
 *    - 第二段：核心能力（ambiguous → scalable）
 *    - 用 secondary-foreground，视觉降权但仍可读
 *
 * 4. CTA
 *    - 主 CTA：View Projects（bg-primary，克制但明确）
 *    - 次 CTA：About Me（纯文字链接，不抢注意力）
 *    - 没有 "Contact Me"——让用户先看作品
 *
 * 5. Scroll Indicator
 *    - 用一条竖线替代文字 + 箭头
 *    - 更 minimal，符合工程产品调性
 *
 * ═══════════════════════════════════════════════════════════
 * 为什么这样更「抓人但不浮夸」
 * ═══════════════════════════════════════════════════════════
 *
 * - 没有形容词堆砌（没有 "passionate" / "innovative" / "cutting-edge"）
 * - 没有自我吹嘘（没有 "I'm a senior engineer with..."）
 * - 没有技术栈炫耀（没有 "React / TypeScript / Next.js..."）
 * - 用「做过什么」代替「我是谁」
 * - 用「简短断言」代替「长段落自我介绍」
 * - CTA 引导用户去看作品，而不是先联系
 *
 * 整体气质：Linear / Stripe Docs 的入口感
 * 一个工程师的作品入口，不是求职页面
 */
