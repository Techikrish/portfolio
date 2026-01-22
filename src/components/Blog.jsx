import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import HighlightCard from './HighlightCard';

import { Link } from 'react-router-dom';
import { articles } from '../data/blogData';

// BlogCard (Unchanged layout, but ensures cleaner implementation)
const BlogCard = ({ article, index }) => (
    <motion.a
        href={article.link}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -5 }}
        style={{ textDecoration: 'none', display: 'block', height: '100%' }}
    >
        <HighlightCard style={{ height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Image */}
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))',
                        zIndex: 1
                    }}></div>
                    <img
                        src={article.image}
                        alt={article.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute',
                        bottom: '15px',
                        left: '15px',
                        zIndex: 2,
                        display: 'flex',
                        gap: '8px'
                    }}>
                        {article.tags.slice(0, 2).map(tag => (
                            <span key={tag} style={{
                                fontSize: '0.7rem',
                                color: '#fff',
                                background: 'rgba(255,255,255,0.1)',
                                padding: '4px 10px',
                                borderRadius: '100px',
                                backdropFilter: 'blur(4px)'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.8rem' }}>{article.date}</span>

                    <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        marginBottom: '0.8rem',
                        color: '#fff',
                        lineHeight: '1.4',
                        fontFamily: 'var(--font-body)'
                    }}>
                        {article.title}
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                        {article.summary}
                    </p>

                    <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '6px', color: '#fff', fontSize: '0.85rem' }}>
                        Read Article <ArrowUpRight size={16} />
                    </div>
                </div>
            </div>
        </HighlightCard>
    </motion.a>
);

const Blog = ({ limit }) => {
    const displayArticles = limit ? articles.slice(0, limit) : articles;

    return (
        <Section id="blog" title="Knowledge Base">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {displayArticles.map((a, i) => <BlogCard key={i} article={a} index={i} />)}
            </div>

            {limit && limit < articles.length && (
                <div style={{ textAlign: 'center' }}>
                    <Link to="/blog" style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 2.5rem',
                                background: 'transparent',
                                border: '1px solid var(--accent)',
                                color: '#fff',
                                borderRadius: '50px',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-body)',
                                fontWeight: '500',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            View All Articles <ArrowUpRight size={18} />
                        </motion.button>
                    </Link>
                </div>
            )}
        </Section>
    );
};

export default Blog;
