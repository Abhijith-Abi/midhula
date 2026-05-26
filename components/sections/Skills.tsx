"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skills } from "@/data/portfolio";
import { TextReveal } from "@/components/animations/TextReveal";
import { ScaleOnScroll } from "@/components/animations/ParallaxScroll";

export function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative py-28 sm:py-36 overflow-hidden"
        >
            {/* Animated divider */}
            <motion.div
                style={{ width: lineWidth }}
                className="absolute top-0 left-0 h-px bg-gradient-to-r from-secondary/50 via-primary/30 to-transparent"
            />

            {/* Background orb */}
            <div
                className="orb orb-violet w-[400px] h-[400px] top-[20%] right-[-10%] opacity-20"
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-primary text-sm font-semibold tracking-wide mb-4"
                    >
                        ✦ Skills & Expertise
                    </motion.span>
                    <TextReveal>
                        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                            The tools I master,
                            <br />
                            <span className="gradient-text-static">
                                the systems I build.
                            </span>
                        </h2>
                    </TextReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-5 max-w-2xl text-base text-muted leading-relaxed"
                    >
                        From quality management platforms to data analytics, a
                        comprehensive toolkit for ensuring compliance and
                        driving continuous improvement.
                    </motion.p>
                </div>

                {/* Skills grid with staggered reveal */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skills.map((category, i) => (
                        <ScaleOnScroll key={category.category}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.6 }}
                                className="glass-card p-6 group relative overflow-hidden h-full"
                            >
                                {/* Top gradient accent */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 to-secondary/40 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

                                <h3 className="font-heading text-sm font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300 uppercase tracking-wide">
                                    {category.category}
                                </h3>
                                <div className="space-y-4">
                                    {category.items.map((skill, j) => (
                                        <div key={skill.name}>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-xs font-medium text-muted-light">
                                                    {skill.name}
                                                </span>
                                                <span className="text-[10px] font-mono text-primary/60">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="progress-bar">
                                                <motion.div
                                                    className="progress-fill"
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: `${skill.level}%`,
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: 0.3 + j * 0.08,
                                                        ease: [0.16, 1, 0.3, 1],
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </ScaleOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
