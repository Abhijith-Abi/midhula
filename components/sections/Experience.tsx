"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

export function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);
    const timelineHeight = useTransform(
        scrollYProgress,
        [0.1, 0.8],
        ["0%", "100%"],
    );

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="relative py-28 sm:py-36 overflow-hidden"
        >
            {/* Animated divider */}
            <motion.div
                style={{ width: lineWidth }}
                className="absolute top-0 left-0 h-px bg-gradient-to-r from-primary/50 via-secondary/30 to-transparent"
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
                        ✦ Experience
                    </motion.span>
                    <TextReveal>
                        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                            Where I&apos;ve grown,
                            <br />
                            <span className="gradient-text-static">
                                what I&apos;ve built.
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
                        My professional journey in pharmaceutical quality
                        assurance — from production floor to quality systems
                        leadership.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Animated vertical timeline line */}
                    <div className="absolute left-[23px] top-0 bottom-0 w-px bg-line hidden md:block">
                        <motion.div
                            style={{ height: timelineHeight }}
                            className="w-full bg-gradient-to-b from-primary via-secondary to-primary/20"
                        />
                    </div>

                    <div className="space-y-10">
                        {experience.map((exp, i) => (
                            <motion.div
                                key={exp.role + exp.period}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.15,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="relative pl-0 md:pl-16 group"
                            >
                                {/* Timeline node */}
                                <motion.span
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.3 + i * 0.15,
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                    className="absolute left-[16px] top-8 w-[15px] h-[15px] rounded-full border-[3px] border-primary bg-bg z-10 hidden md:block shadow-[0_0_12px_rgba(20,184,166,0.5)]"
                                />

                                <div className="glass-card p-7 sm:p-8 relative overflow-hidden">
                                    {/* Left accent bar */}
                                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-secondary to-transparent rounded-full" />

                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                                        <div>
                                            <div className="flex items-center gap-2.5 mb-2">
                                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <Briefcase
                                                        size={14}
                                                        className="text-primary"
                                                    />
                                                </div>
                                                <h3 className="text-white text-xl font-bold tracking-tight font-heading group-hover:text-primary transition-colors">
                                                    {exp.role}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-muted ml-[42px]">
                                                <span className="font-medium text-primary/80">
                                                    {exp.company}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={12} />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted bg-primary/[0.04] border border-primary/15 rounded-full px-4 py-2 self-start shrink-0">
                                            <Calendar
                                                size={12}
                                                className="text-primary/70"
                                            />
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Responsibilities */}
                                    <ul className="space-y-3 ml-[42px]">
                                        {exp.description.map((desc, j) => (
                                            <motion.li
                                                key={j}
                                                initial={{ opacity: 0, x: -15 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: 0.3 + j * 0.05,
                                                    duration: 0.5,
                                                }}
                                                className="flex items-start gap-3 text-sm text-muted leading-relaxed group/item"
                                            >
                                                <ChevronRight
                                                    size={14}
                                                    className="text-primary/50 shrink-0 mt-0.5 group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all"
                                                />
                                                <span className="group-hover/item:text-white transition-colors duration-200">
                                                    {desc}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
