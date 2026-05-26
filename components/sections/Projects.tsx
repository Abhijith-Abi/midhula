"use client";

import { useState, useRef } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from "framer-motion";
import { projects } from "@/data/portfolio";
import { ArrowUpRight, Layers } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const categories = ["All", "Quality Systems", "Technical"];

export function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative py-28 sm:py-36 overflow-hidden"
        >
            {/* Animated divider */}
            <motion.div
                style={{ width: lineWidth }}
                className="absolute top-0 left-0 h-px bg-gradient-to-r from-primary/50 via-secondary/30 to-transparent"
            />

            <div
                className="orb orb-cyan w-[350px] h-[350px] bottom-[10%] left-[-8%] opacity-25"
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-primary text-sm font-semibold tracking-wide mb-4"
                    >
                        ✦ Projects
                    </motion.span>
                    <TextReveal>
                        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                            Work that makes
                            <br />
                            <span className="gradient-text-static">
                                a real impact.
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
                        From digital transformation of quality systems to
                        AI-powered solutions — projects that deliver measurable
                        results.
                    </motion.p>
                </div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-12 flex-wrap"
                >
                    {categories.map((cat) => {
                        const isActive = activeFilter === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className="relative text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer overflow-hidden"
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="projectFilter"
                                        className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                    />
                                )}
                                <span
                                    className={`relative z-10 ${isActive ? "text-white font-semibold" : "text-muted hover:text-white"}`}
                                >
                                    {cat}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Project cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="group"
                            >
                                <div className="glass-card p-6 h-full flex flex-col justify-between relative overflow-hidden">
                                    {/* Hover gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-secondary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="space-y-4 relative z-10">
                                        {/* Header */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                    <Layers
                                                        size={14}
                                                        className="text-primary"
                                                    />
                                                </div>
                                                <span className="text-xs font-medium text-muted">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <motion.div
                                                whileHover={{
                                                    rotate: 45,
                                                    scale: 1.1,
                                                }}
                                                className="w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all"
                                            >
                                                <ArrowUpRight
                                                    size={14}
                                                    className="text-muted group-hover:text-primary transition-colors"
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-white text-lg font-bold group-hover:text-primary transition-colors duration-300 font-heading">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted text-sm leading-relaxed mt-2.5">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-5 mt-5 border-t border-line/50 relative z-10">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="tag text-[0.65rem]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
