import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Section from '../components/Section';
import Blog from '../components/Blog';

const AllBlogs = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 20px', marginBottom: '2rem' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    <motion.div
                        whileHover={{ x: -10, color: '#fff' }}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '1.1rem', cursor: 'pointer' }}
                    >
                        <ArrowLeft size={24} /> Back to Void
                    </motion.div>
                </Link>
            </div>

            <Blog /> {/* Renders all articles by default */}
        </div>
    );
};

export default AllBlogs;
