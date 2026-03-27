import React from 'react';

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
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 20% 20%, rgba(46,16,101,0.35), transparent 45%), radial-gradient(circle at 80% 75%, rgba(23,37,84,0.3), transparent 40%), linear-gradient(180deg, #040404 0%, #000 100%)'
            }}></div>
        </div>
    );
};

export default Background;
