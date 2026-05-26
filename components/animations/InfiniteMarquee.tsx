"use client";

import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
    items: string[];
    speed?: number;
    className?: string;
    direction?: "left" | "right";
}

export function InfiniteMarquee({
    items,
    speed = 25,
    className = "",
    direction = "left",
}: InfiniteMarqueeProps) {
    const duplicated = [...items, ...items];

    return (
        <div className={`overflow-hidden marquee-fade ${className}`}>
            <motion.div
                className="flex gap-6 whitespace-nowrap"
                animate={{
                    x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {duplicated.map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-3 text-sm font-medium text-muted-light/60 shrink-0"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
