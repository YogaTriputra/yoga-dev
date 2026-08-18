"use client";

import { motion } from "motion/react";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <div className="relative min-h-screen">
        <motion.div
        initial={{
            opacity: 0,
            scale: 0.98,
        }}
        animate={{
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 0.45,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
        }}
        >
        {children}
        </motion.div>

        <motion.div
        initial={{
            clipPath: "polygon(0 0, 120% 0, 100% 100%, 0 100%)",
        }}
        animate={{
            clipPath: "polygon(100% 0, 120% 0, 100% 100%, 100% 100%)",
        }}
        transition={{
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
        }}
        className="pointer-events-none fixed inset-0 z-[9999] bg-[#3565a0]"
        />

        <motion.div
        initial={{
            clipPath: "polygon(0 0, 105% 0, 90% 100%, 0 100%)",
        }}
        animate={{
            clipPath: "polygon(100% 0, 105% 0, 100% 100%, 100% 100%)",
        }}
        transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.76, 0, 0.24, 1],
        }}
        className="pointer-events-none fixed inset-0 z-[9998] bg-[#7ca6df]"
        />
    </div>
    );
}
