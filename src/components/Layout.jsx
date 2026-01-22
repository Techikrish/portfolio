import React from 'react';
import { motion } from 'framer-motion';
import Background from './Background';

const Layout = ({ children }) => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <Background />

            {/* HUD Overlay Lines */}
            <div style={{
                position: 'fixed',
                top: 0, left: '5%',
                width: '1px', height: '100%',
                background: 'rgba(255,255,255,0.03)',
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'fixed',
                top: 0, right: '5%',
                width: '1px', height: '100%',
                background: 'rgba(255,255,255,0.03)',
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2, paddingBottom: '100px' }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
