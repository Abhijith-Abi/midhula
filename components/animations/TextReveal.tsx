"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function TextReveal({
    children,
    className = "",
    delay = 0,
}: TextRevealProps) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

interface WordRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export function WordReveal({
    text,
    className = "",
    delay = 0,
}: WordRevealProps) {
    const words = text.split(" ");

    return (
        <span className={className}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className="inline-block overflow-hidden mr-[0.3em]"
                >
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%", rotateX: 45 }}
                        whileInView={{ y: 0, rotateX: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            delay: delay + i * 0.04,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
