"use client";

import React, { useRef, useState } from "react";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    tiltAmount?: number;
}

export function TiltCard({
    children,
    className = "",
    tiltAmount = 8,
}: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
    const [shineStyle, setShineStyle] = useState<React.CSSProperties>({
        opacity: 0,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * tiltAmount;
        const rotateY = ((x - centerX) / centerX) * tiltAmount;

        setTiltStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`,
            transition: "transform 80ms cubic-bezier(0.25, 1, 0.5, 1)",
        });

        const shineX = (x / rect.width) * 100;
        const shineY = (y / rect.height) * 100;

        setShineStyle({
            background: `radial-gradient(circle 150px at ${shineX}% ${shineY}%, rgba(20, 184, 166, 0.08), rgba(244, 114, 182, 0.03) 50%, transparent 80%)`,
            opacity: 1,
        });
    };

    const handleMouseLeave = () => {
        setTiltStyle({
            transform:
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
            transition: "transform 500ms ease",
        });
        setShineStyle({
            opacity: 0,
            transition: "opacity 500ms ease",
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
            style={tiltStyle}
        >
            <div
                className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
                style={shineStyle}
            />
            {children}
        </div>
    );
}
