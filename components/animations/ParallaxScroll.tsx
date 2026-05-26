"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxScrollProps {
    children: ReactNode;
    className?: string;
    speed?: number;
    direction?: "up" | "down";
}

export function ParallaxScroll({
    children,
    className = "",
    speed = 0.3,
    direction = "up",
}: ParallaxScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const factor = direction === "up" ? -1 : 1;
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [factor * speed * 100, factor * -speed * 100],
    );

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}

interface ScaleOnScrollProps {
    children: ReactNode;
    className?: string;
}

export function ScaleOnScroll({
    children,
    className = "",
}: ScaleOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <motion.div ref={ref} style={{ scale, opacity }} className={className}>
            {children}
        </motion.div>
    );
}
