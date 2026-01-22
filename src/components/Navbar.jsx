import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Blog', href: '#blog' },
        { name: 'Apps', href: '#apps' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
            style={{
                background: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
                borderBottom: scrolled ? 'var(--glass-border)' : 'none'
            }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="logo" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    DevOps<span style={{ color: 'var(--primary)' }}>.Portfolio</span>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link"
                            style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden" style={{ display: 'none' }}> {/* Hidden for now, can implement mobile menu logic if needed usually handled by media queries in CSS or conditional rendering here */}
                    {/* Simplified for this stage, focusing on desktop structure first per prompt implied complexity */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
