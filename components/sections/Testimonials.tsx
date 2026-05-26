"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/portfolio";
import { Quote } from "lucide-react";

export function Testimonials() {
    const doubled = [...testimonials, ...testimonials];

    return (
        <section className="py-20 sm:py-28 lg:py-36 overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-6 mb-12">
                {/* Divider header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 flex items-center gap-3 sm:mb-14 sm:gap-4 lg:mb-20"
                >
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary sm:text-[11px]">
                        06
                    </span>
                    <span className="h-px bg-line flex-1"></span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 sm:text-[11px]">
                        Reviews
                    </span>
                </motion.div>

                <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-white">
                    <span className="block">PEER</span>
                    <span className="block ghost-text">REVIEWS.</span>
                </h2>
            </div>

            {/* High fidelity marquee */}
            <div className="relative overflow-hidden w-full py-4">
                {/* Edge overlay masks for smooth fade */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to right, var(--color-bg), transparent)",
                    }}
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to left, var(--color-bg), transparent)",
                    }}
                />

                <motion.div
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 38,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-6 w-max"
                >
                    {doubled.map((t, i) => (
                        <div
                            key={i}
                            className="card w-[380px] shrink-0 p-8 relative overflow-hidden group"
                        >
                            {/* Visual quote indicator */}
                            <Quote
                                size={18}
                                className="text-primary/20 mb-4 group-hover:text-primary/45 transition-all shadow-[0_0_8px_transparent] group-hover:shadow-[0_0_8px_var(--color-primary)] duration-500"
                            />

                            <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6 font-medium italic">
                                &ldquo;{t.content}&rdquo;
                            </p>

                            {/* Author metadata */}
                            <div className="flex items-center gap-3 pt-4 border-t border-line">
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-bg text-[0.7rem] font-bold shadow-[0_0_10px_rgba(20,184,166,0.3)]"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                                    }}
                                >
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p className="text-white text-xs font-bold font-heading">
                                        {t.name}
                                    </p>
                                    <p className="text-white/40 font-mono text-[0.6rem] uppercase tracking-wider mt-0.5">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
