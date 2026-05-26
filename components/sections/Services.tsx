"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/data/portfolio";
import { Shield, Zap, FileCheck, BarChart3, Brain, Lock } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield size={24} />,
    Zap: <Zap size={24} />,
    FileCheck: <FileCheck size={24} />,
    BarChart3: <BarChart3 size={24} />,
    Brain: <Brain size={24} />,
    Lock: <Lock size={24} />,
};

export function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative py-28 sm:py-36 overflow-hidden"
        >
            {/* Animated divider */}
            <motion.div
                style={{ width: lineWidth }}
                className="absolute top-0 left-0 h-px bg-gradient-to-r from-secondary/50 via-primary/30 to-transparent"
            />

            <div
                className="orb orb-violet w-[400px] h-[400px] top-[30%] left-[-10%] opacity-15"
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
                        ✦ Services
                    </motion.span>
                    <TextReveal>
                        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                            How I can help
                            <br />
                            <span className="gradient-text-static">
                                your organization.
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
                        Comprehensive quality assurance solutions spanning
                        regulatory compliance, digital transformation, and
                        data-driven insights.
                    </motion.p>
                </div>

                {/* Services grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: i * 0.08,
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group"
                        >
                            <div className="glass-card p-7 h-full flex flex-col relative overflow-hidden glow-border">
                                {/* Animated bottom line */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-600" />

                                {/* Icon with animated background */}
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 3 }}
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/15 text-primary mb-6 group-hover:from-primary/20 group-hover:to-secondary/10 group-hover:shadow-[0_0_20px_-5px_rgba(20,184,166,0.3)] transition-all duration-500"
                                >
                                    {iconMap[service.icon]}
                                </motion.div>

                                <h3 className="text-white text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300 font-heading">
                                    {service.title}
                                </h3>

                                <p className="text-muted text-sm leading-relaxed flex-1">
                                    {service.description}
                                </p>

                                {/* Hover arrow */}
                                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-primary/0 group-hover:text-primary transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <span>Learn more</span>
                                    <span className="transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
