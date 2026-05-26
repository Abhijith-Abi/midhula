"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
        >
            <nav
                className={`relative mx-auto flex w-full max-w-4xl items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-500 ${
                    scrolled
                        ? "border-line/80 bg-bg/80 backdrop-blur-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.7),0_0_20px_-10px_rgba(20,184,166,0.08)]"
                        : "border-transparent bg-transparent"
                }`}
            >
                {/* Brand */}
                <a
                    href="#home"
                    className="group flex items-center gap-2 focus:outline-none"
                >
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-secondary shadow-[0_0_12px_rgba(20,184,166,0.4)]"
                    >
                        <span className="font-heading text-xs font-extrabold text-white">
                            M
                        </span>
                    </motion.span>
                    <span className="hidden font-heading text-sm font-bold tracking-tight text-white sm:block group-hover:text-primary transition-colors duration-300">
                        Midhula
                    </span>
                </a>

                {/* Desktop Nav Links */}
                <ul className="hidden items-center gap-0.5 md:flex">
                    {navLinks.map((link) => {
                        const isActive =
                            activeSection === link.href.replace("#", "");
                        return (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`relative rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                                        isActive
                                            ? "text-white"
                                            : "text-white/50 hover:text-white/80"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="navIndicator"
                                            className="absolute inset-0 rounded-lg bg-white/[0.06]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    <span className="relative z-10">
                                        {link.name}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* CTA */}
                <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href="#contact"
                    className="btn-primary hidden items-center gap-2 px-5 py-2 text-[12px] font-semibold md:inline-flex"
                >
                    <span>Hire Me</span>
                </motion.a>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white md:hidden hover:bg-white/[0.05] transition"
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[72px] left-4 right-4 md:hidden flex flex-col gap-1 p-5 rounded-2xl border border-line bg-bg/95 backdrop-blur-2xl z-40 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}
                                className="w-full rounded-lg px-4 py-3 text-sm font-medium hover:bg-white/[0.03] text-white/70 hover:text-white transition-all duration-200"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="btn-primary w-full justify-center mt-3 py-3 text-sm text-center"
                        >
                            <span>Hire Me</span>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
