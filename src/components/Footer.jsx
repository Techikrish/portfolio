import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '4rem 0 6rem 0', // Extra padding at bottom for Dock
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.9rem',
            position: 'relative',
            zIndex: 10
        }}>
            <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.6)'
            }}>
                by TechiKrish
            </p>
        </footer>
    );
};

export default Footer;
