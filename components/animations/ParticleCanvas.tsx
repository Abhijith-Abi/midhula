"use client";

import { useEffect, useRef } from "react";

export function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            alpha: number;
            color: string;
        }> = [];

        const particleCount = Math.min(
            45,
            Math.floor((width * height) / 35000),
        );
        const connectionDistance = 140;
        const mouse = { x: -1000, y: -1000, rx: -1000, ry: -1000 };

        const colors = [
            "20, 184, 166", // teal
            "244, 114, 182", // coral pink
            "94, 234, 212", // light teal
        ];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                radius: Math.random() * 1.6 + 0.4,
                alpha: Math.random() * 0.35 + 0.08,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("mousemove", handleMouseMove, {
            passive: true,
        });
        window.addEventListener("mouseleave", handleMouseLeave, {
            passive: true,
        });
        window.addEventListener("resize", handleResize, { passive: true });

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            mouse.rx += (mouse.x - mouse.rx) * 0.06;
            mouse.ry += (mouse.y - mouse.ry) * 0.06;

            ctx.lineWidth = 0.35;
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const alpha = (1 - dist / connectionDistance) * 0.07;
                        ctx.strokeStyle = `rgba(20, 184, 166, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                if (mouse.x > -500) {
                    const mdx = p1.x - mouse.rx;
                    const mdy = p1.y - mouse.ry;
                    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mdist < 160) {
                        const force = (1 - mdist / 160) * 0.18;
                        p1.vx += (mdx / mdist) * force * 0.12;
                        p1.vy += (mdy / mdist) * force * 0.12;
                    }
                }

                p1.x += p1.vx;
                p1.y += p1.vy;
                p1.vx *= 0.987;
                p1.vy *= 0.987;

                if (p1.x < 0) p1.x = width;
                else if (p1.x > width) p1.x = 0;
                if (p1.y < 0) p1.y = height;
                else if (p1.y > height) p1.y = 0;

                ctx.fillStyle = `rgba(${p1.color}, ${p1.alpha})`;
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.55 }}
        />
    );
}
