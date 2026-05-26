"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolio";
import { ArrowDown, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { TextReveal } from "@/components/animations/TextReveal";
import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";

const marqueeItems = [
    "Quality Assurance",
    "GMP Compliance",
    "Batch Release",
    "Veeva Vault",
    "MasterControl",
    "Data Integrity",
    "COA/COC Review",
    "CAPA Tracking",
    "Regulatory Audits",
    "Digital Transformation",
];

export function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const statsY = useTransform(scrollYProgress, [0, 1], [0, 80]);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative isolate min-h-screen w-full overflow-hidden flex flex-col justify-center"
        >
            {/* Aurora background effect */}
            <div className="aurora-bg" aria-hidden="true" />

            {/* Decorative orbs */}
            <div
                className="orb orb-violet w-[600px] h-[600px] top-[-15%] right-[-15%] opacity-30"
                aria-hidden="true"
            />
            <div
                className="orb orb-cyan w-[400px] h-[400px] bottom-[5%] left-[-10%] opacity-20"
                aria-hidden="true"
            />

            {/* Main content */}
            <motion.div
                style={{ y: titleY, opacity: titleOpacity }}
                className="max-w-6xl mx-auto px-6 relative z-10 w-full pt-32 pb-16"
            >
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-5 py-2.5">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        <span className="text-xs font-semibold text-primary-light tracking-wide">
                            Available for opportunities
                        </span>
                    </span>
                </motion.div>

                {/* Name + Role */}
                <div className="space-y-4">
                    <TextReveal delay={0.1}>
                        <div className="flex items-center gap-3 mb-2">
                            <Sparkles size={16} className="text-primary" />
                            <span className="text-sm font-medium uppercase tracking-[0.15em] text-muted-light">
                                {personalInfo.role}
                            </span>
                        </div>
                    </TextReveal>
                    <TextReveal delay={0.2}>
                        <h1 className="font-display text-[clamp(3.2rem,10vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.05em] text-white">
                            {personalInfo.name.split(" ")[0]}
                        </h1>
                    </TextReveal>
                    <TextReveal delay={0.3}>
                        <h1 className="font-display text-[clamp(3.2rem,10vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.05em]">
                            <span className="gradient-text">
                                {personalInfo.name.split(" ")[1]}
                            </span>
                        </h1>
                    </TextReveal>
                </div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-10 max-w-lg text-lg leading-relaxed text-muted-light/80"
                >
                    {personalInfo.tagline}
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <MagneticButton>
                        <a
                            href="#projects"
                            className="btn-primary px-8 py-4 text-sm inline-flex items-center gap-2.5"
                        >
                            <span>View My Work</span>
                            <span className="inline-block transition-transform group-hover:translate-x-0.5">
                                →
                            </span>
                        </a>
                    </MagneticButton>
                    <MagneticButton>
                        <a href="#contact" className="btn-outline px-7 py-3.5">
                            Let&apos;s Connect
                        </a>
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
                style={{ y: statsY }}
                className="max-w-6xl mx-auto px-6 w-full relative z-10 pb-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                            className="glass-card group px-5 py-6 text-center"
                        >
                            <p className="font-heading text-3xl font-extrabold text-white tracking-tight sm:text-4xl group-hover:text-primary transition-colors duration-300">
                                {stat.value}
                            </p>
                            <p className="mt-2 text-xs text-muted font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Infinite marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="w-full py-8 border-t border-b border-line/40 relative z-10"
            >
                <InfiniteMarquee items={marqueeItems} speed={30} />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
            >
                <motion.a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted/40 hover:text-primary transition-colors"
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >
                    <ArrowDown size={18} />
                </motion.a>
            </motion.div>
        </section>
    );
}
