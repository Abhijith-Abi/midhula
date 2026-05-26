"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import {
    Send,
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Sparkles,
} from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [focused, setFocused] = useState<string | null>(null);

    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        window.open(mailtoLink);
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative py-28 sm:py-36 overflow-hidden"
        >
            {/* Animated divider */}
            <motion.div
                style={{ width: lineWidth }}
                className="absolute top-0 left-0 h-px bg-gradient-to-r from-primary/50 via-secondary/30 to-transparent"
            />

            <div
                className="orb orb-cyan w-[300px] h-[300px] top-[20%] right-[-5%] opacity-20"
                aria-hidden="true"
            />
            <div
                className="orb orb-violet w-[250px] h-[250px] bottom-[10%] left-[-5%] opacity-15"
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto px-6">
                {/* Section header - centered */}
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wide mb-4"
                    >
                        <Sparkles size={14} />
                        Let&apos;s Connect
                    </motion.span>
                    <TextReveal>
                        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                            Ready to collaborate?
                            <br />
                            <span className="gradient-text-static">
                                Let&apos;s talk.
                            </span>
                        </h2>
                    </TextReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-5 max-w-xl mx-auto text-base text-muted leading-relaxed"
                    >
                        Whether it&apos;s a quality assurance role, compliance
                        consulting, or collaboration — I&apos;d love to hear
                        from you.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
                    {/* Left: Contact cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        {[
                            {
                                icon: <Mail size={18} />,
                                label: "Email",
                                value: personalInfo.email,
                                href: `mailto:${personalInfo.email}`,
                            },
                            {
                                icon: <Phone size={18} />,
                                label: "Phone",
                                value: personalInfo.phone,
                                href: `tel:${personalInfo.phone}`,
                            },
                            {
                                icon: <MapPin size={18} />,
                                label: "Location",
                                value: personalInfo.location,
                                href: undefined,
                            },
                            {
                                icon: <ExternalLink size={18} />,
                                label: "LinkedIn",
                                value: "linkedin.com/in/midhulamathew",
                                href: personalInfo.social.linkedin,
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <MagneticButton strength={0.15}>
                                    <div className="glass-card p-5 flex items-center gap-4 group cursor-default">
                                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/15 flex items-center justify-center text-primary group-hover:from-primary/20 group-hover:to-secondary/10 group-hover:shadow-[0_0_15px_-3px_rgba(20,184,166,0.3)] transition-all duration-400">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[11px] text-muted uppercase tracking-wider font-medium mb-0.5">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={
                                                        item.label ===
                                                        "LinkedIn"
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    rel="noopener noreferrer"
                                                    className="text-sm font-medium text-white hover:text-primary transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="text-sm font-medium text-white">
                                                    {item.value}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </MagneticButton>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass-card p-7 sm:p-8 relative overflow-hidden"
                    >
                        {/* Top gradient accent */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary/20" />

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <label className="text-xs font-medium text-muted-light block mb-2.5">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onFocus={() => setFocused("name")}
                                    onBlur={() => setFocused(null)}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className={`w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder:text-muted/30 focus:outline-none bg-bg/50 border transition-all duration-300 ${
                                        focused === "name"
                                            ? "border-primary/50 shadow-[0_0_15px_-5px_rgba(20,184,166,0.3)]"
                                            : "border-line hover:border-line2"
                                    }`}
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="relative">
                                <label className="text-xs font-medium text-muted-light block mb-2.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onFocus={() => setFocused("email")}
                                    onBlur={() => setFocused(null)}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className={`w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder:text-muted/30 focus:outline-none bg-bg/50 border transition-all duration-300 ${
                                        focused === "email"
                                            ? "border-primary/50 shadow-[0_0_15px_-5px_rgba(20,184,166,0.3)]"
                                            : "border-line hover:border-line2"
                                    }`}
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="relative">
                                <label className="text-xs font-medium text-muted-light block mb-2.5">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onFocus={() => setFocused("message")}
                                    onBlur={() => setFocused(null)}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className={`w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder:text-muted/30 focus:outline-none bg-bg/50 border transition-all duration-300 resize-none ${
                                        focused === "message"
                                            ? "border-primary/50 shadow-[0_0_15px_-5px_rgba(20,184,166,0.3)]"
                                            : "border-line hover:border-line2"
                                    }`}
                                    placeholder="Tell me about your project or opportunity..."
                                />
                            </div>

                            <MagneticButton className="w-full">
                                <button
                                    type="submit"
                                    className="btn-primary w-full justify-center py-4 text-sm inline-flex items-center gap-2.5 font-semibold cursor-pointer"
                                >
                                    <span>Send Message</span>
                                    <Send size={14} />
                                </button>
                            </MagneticButton>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
