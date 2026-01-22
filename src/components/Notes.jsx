import React from 'react';
import { motion } from 'framer-motion';
import { Book, ExternalLink, Cloud } from 'lucide-react';
import Section from './Section';
import HighlightCard from './HighlightCard';
import awsArchitecture from '../assets/aws_architecture.png';

const Notes = () => {
    return (
        <Section id="notes" title="Study Notes & Resources">
            <motion.a
                href="https://techikrish.github.io/aws-sa-notes/"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                style={{ textDecoration: 'none', display: 'block' }}
            >
                <HighlightCard>
                    <div style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, gap: '2rem', padding: '2rem' }}>
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#FF9900' }}>
                                <Cloud size={24} />
                                <span style={{ fontFamily: 'Space Mono', fontSize: '0.9rem' }}>SAA-C03 CERTIFICATION</span>
                            </div>

                            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>
                                AWS Solutions Architect Notes
                            </h3>

                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                                A comprehensive, open-source knowledge base I created while preparing for the AWS Certified Solutions Architect Associate exam. It covers core services, architecture patterns, and security best practices.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <span style={{ padding: '8px 16px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.9rem' }}>
                                    Hosted on GitHub Pages
                                </span>
                            </div>
                        </div>

                        <div style={{ width: '100%', maxWidth: '400px', height: '250px', borderRadius: '12px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <img
                                src={awsArchitecture}
                                alt="AWS Notes"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                            <div style={{ position: 'absolute', bottom: '20px', right: '20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Read Notes <ExternalLink size={18} />
                            </div>
                        </div>
                    </div>
                </HighlightCard>
            </motion.a>
        </Section>
    );
};

export default Notes;
