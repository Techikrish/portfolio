import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            background: 'var(--bg-dark)',
            overflow: 'hidden',
            pointerEvents: 'none'
        }}>
            {/* Aurora Blob 1 */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '-10%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, var(--aurora-1) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    opacity: 0.4
                }}
            />

            {/* Aurora Blob 2 */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    right: '-10%',
                    width: '70vw',
                    height: '70vw',
                    background: 'radial-gradient(circle, var(--aurora-2) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    opacity: 0.3
                }}
            />

            {/* Aurora Blob 3 (Center Accent) */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, var(--aurora-3) 0%, transparent 70%)',
                    filter: 'blur(120px)',
                    opacity: 0.2
                }}
            />

            {/* Noise Overlay for texture */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
                opacity: 0.03,
                mixBlendMode: 'overlay'
            }}></div>
        </div>
    );
};

export default Background;
