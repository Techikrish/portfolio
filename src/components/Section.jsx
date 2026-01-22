import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`py-20 ${className}`} style={{ padding: '5rem 20px' }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: '2rem',
                            fontWeight: '600',
                            marginBottom: '3rem',
                            fontFamily: 'var(--font-body)',
                            color: '#fff',
                            letterSpacing: '-0.02em',
                        }}>
                        {title}
                    </motion.h2>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
