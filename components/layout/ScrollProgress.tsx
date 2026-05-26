"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{
                scaleX,
                background: "linear-gradient(90deg, #14b8a6, #f472b6, #5eead4)",
                boxShadow:
                    "0 0 10px rgba(20, 184, 166, 0.5), 0 0 20px rgba(244, 114, 182, 0.3)",
            }}
            className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
        />
    );
}
