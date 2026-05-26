import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ParticleCanvas } from "@/components/animations/ParticleCanvas";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    weight: ["400", "500"],
});

export const metadata: Metadata = {
    title: "Midhula Mathew · Quality Assurance Specialist",
    description:
        "QA Specialist with hands-on experience in GMP-regulated pharmaceutical environments. Specializing in batch release documentation, COA/COC review, and electronic quality systems.",
    keywords: [
        "Quality Assurance",
        "QA Specialist",
        "GMP",
        "Pharmaceutical",
        "MasterControl",
        "Veeva Vault",
    ],
    authors: [{ name: "Midhula Mathew" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} font-sans antialiased`}
            >
                <ParticleCanvas />
                <div className="ambient-glow" aria-hidden="true" />
                <div className="grain-overlay" aria-hidden="true" />
                {children}
            </body>
        </html>
    );
}
