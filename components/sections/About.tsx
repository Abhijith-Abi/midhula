"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo, education, certifications } from "@/data/portfolio";
import { GraduationCap, Award, Target, Zap } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { ParallaxScroll } from "@/components/animations/ParallaxScroll";

export function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative py-28 sm:py-36 overflow-hidden"
        >
            {/* Animated section divider */}
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
                        ✦ About Me
                    </motion.span>
                    <TextReveal>
                        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                            Driven by precision,
                            <br />
                            <span className="gradient-text-static">
                                powered by compliance.
                            </span>
                        </h2>
                    </TextReveal>
                </div>

                <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* Left: Bio with staggered paragraphs */}
                    <div className="space-y-8">
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-lg leading-relaxed text-muted-light"
                        >
                            {personalInfo.bio}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg leading-relaxed text-muted-light"
                        >
                            I led the digital transformation of all physical
                            batch records into MasterControl, improving
                            accessibility, audit readiness, and data integrity
                            across the organization.
                        </motion.p>

                        {/* Highlight cards */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <ParallaxScroll speed={0.1}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-5 group"
                                >
                                    <Target
                                        size={20}
                                        className="text-primary mb-3 group-hover:scale-110 transition-transform"
                                    />
                                    <p className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                                        2+
                                    </p>
                                    <p className="text-xs text-muted mt-1">
                                        Years in QA
                                    </p>
                                </motion.div>
                            </ParallaxScroll>
                            <ParallaxScroll speed={0.15} direction="down">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="glass-card p-5 group"
                                >
                                    <Zap
                                        size={20}
                                        className="text-secondary mb-3 group-hover:scale-110 transition-transform"
                                    />
                                    <p className="text-3xl font-bold text-white group-hover:text-secondary transition-colors">
                                        500+
                                    </p>
                                    <p className="text-xs text-muted mt-1">
                                        Records Digitized
                                    </p>
                                </motion.div>
                            </ParallaxScroll>
                        </div>
                    </div>

                    {/* Right: Education & Certifications */}
                    <div className="space-y-6">
                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card p-6 relative overflow-hidden"
                        >
                            {/* Decorative gradient line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent" />

                            <div className="flex items-center gap-2.5 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <GraduationCap
                                        size={16}
                                        className="text-primary"
                                    />
                                </div>
                                <h3 className="font-heading text-base font-bold text-white">
                                    Education
                                </h3>
                            </div>
                            <div className="space-y-5">
                                {education.map((edu, i) => (
                                    <motion.div
                                        key={edu.degree}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="border-l-2 border-line pl-4 hover:border-primary/60 transition-colors duration-300 group"
                                    >
                                        <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                                            {edu.degree}
                                        </p>
                                        <p className="text-xs text-muted mt-0.5">
                                            {edu.institution}
                                        </p>
                                        <p className="text-xs text-primary/60 mt-0.5">
                                            {edu.period} · {edu.location}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="glass-card p-6 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary via-primary to-transparent" />

                            <div className="flex items-center gap-2.5 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                                    <Award
                                        size={16}
                                        className="text-secondary"
                                    />
                                </div>
                                <h3 className="font-heading text-base font-bold text-white">
                                    Certifications
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {certifications.map((cert, i) => (
                                    <motion.div
                                        key={cert}
                                        initial={{ opacity: 0, x: 15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.08 }}
                                        className="flex items-start gap-3 group cursor-default"
                                    >
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary shrink-0 group-hover:scale-125 transition-transform" />
                                        <span className="text-sm text-muted group-hover:text-white transition-colors duration-300">
                                            {cert}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
