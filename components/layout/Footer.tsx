"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative border-t border-line/50">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-muted text-sm flex items-center gap-1.5"
                    >
                        © 2026 {personalInfo.name}. Made with{" "}
                        <Heart size={12} className="text-primary" /> in Barrie,
                        ON
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -2 }}
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="text-muted hover:text-primary transition-colors duration-300 flex items-center gap-2 text-sm group cursor-pointer"
                    >
                        Back to top
                        <span className="w-8 h-8 rounded-full border border-line flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all">
                            <ArrowUp
                                size={14}
                                className="group-hover:-translate-y-0.5 transition-transform duration-300"
                            />
                        </span>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
