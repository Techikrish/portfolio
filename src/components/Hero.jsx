import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cloud, Cpu, Github, Linkedin, Twitter, Activity, Server, Database } from 'lucide-react';
import profileImg from '../assets/profile.png';

const StatusBadge = ({ label, status, color }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 12px',
        borderRadius: '4px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        fontSize: '0.8rem',
        fontFamily: 'Space Mono',
        color: 'var(--text-muted)'
    }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}` }}></div>
        {label}: <span style={{ color: 'var(--text-main)' }}>{status}</span>
    </div>
);

import { ArrowDown, Mail } from 'lucide-react';
import HighlightCard from './HighlightCard';
import Section from './Section';


const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '60px',
            position: 'relative',
            zIndex: 2
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h1 style={{
                    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                    lineHeight: '1.1',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: '800',
                    color: '#fff',
                    letterSpacing: '-0.03em',
                    backgroundImage: 'linear-gradient(to right, #fff, #cbd5e1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Krishna Fattepurkar
                </h1>
                <h2 style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    fontWeight: '500',
                    color: 'var(--text-muted)',
                    marginBottom: '2rem',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '-0.01em'
                }}>
                    DevOps And Cloud
                </h2>

                <p style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    color: 'var(--text-muted)',
                    fontSize: '1.2rem'
                }}>
                    Orchestrating resilient cloud architectures and automating the future of infrastructure.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <HighlightCard style={{ borderRadius: '50%', padding: '5px' }}>
                    <div style={{
                        width: '250px',
                        height: '250px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <img
                            src={profileImg}
                            alt="Krishna"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.5s' }}
                            onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                            onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
                        />
                    </div>
                </HighlightCard>
            </motion.div>

            <div style={{
                marginTop: '4rem',
                display: 'flex',
                gap: '2.5rem'
            }}>
                <a href="https://github.com/Techikrish" target="_blank" rel="noreferrer" style={{ color: '#fff', transition: 'transform 0.2s' }} className="social-link github">
                    <Github size={40} />
                </a>
                <a href="https://linkedin.com/in/krishnafattepurkar" target="_blank" rel="noreferrer" style={{ color: '#0077b5', transition: 'transform 0.2s' }} className="social-link linkedin">
                    <Linkedin size={40} />
                </a>
                <a href="mailto:krishnafattepurkar@gmail.com" style={{ color: '#EA4335', transition: 'transform 0.2s' }} className="social-link mail">
                    <Mail size={40} />
                </a>
                <a href="https://x.com/revo_tron" target="_blank" rel="noreferrer" style={{ color: '#1DA1F2', transition: 'transform 0.2s' }} className="social-link x">
                    {/* X Logo */}
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h0.001Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
                <a href="https://medium.com/@krishnafattepurkar" target="_blank" rel="noreferrer" style={{ color: '#00AB6C', transition: 'transform 0.2s' }} className="social-link medium">
                    {/* Medium Logo */}
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 6.22-1.58 8.94-.48-1.74-2.14-3.02-4.14-3.02-2.39 0-4.34 1.94-4.34 4.34V24H10v-1.73c0-2.4-1.94-4.34-4.34-4.34C3.26 17.92 1.25 19.34.8 21.28A11.96 11.96 0 0 1 0 12c0-6.63 5.37-12 12-12s12 5.37 12 12z" />
                    </svg>
                </a>
                <style>{`
                    .social-link:hover { transform: scale(1.2) translateY(-4px); filter: drop-shadow(0 0 8px currentColor); }
                `}</style>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '100px',
                    color: 'rgba(255,255,255,0.2)'
                }}
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
