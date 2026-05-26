"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    className?: string;
}

export function SectionHeading({ title, className = "" }: SectionHeadingProps) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight ${className}`}
        >
            {title}
        </motion.h2>
    );
}
