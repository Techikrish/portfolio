import React, { useRef, useState } from 'react';

const HighlightCard = ({ children, className = '', style = {} }) => {
    const divRef = useRef(null);
    const [opacity, setOpacity] = useState(0);
    const rafRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
            div.style.setProperty('--spot-x', `${x}px`);
            div.style.setProperty('--spot-y', `${y}px`);
            rafRef.current = null;
        });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{
                '--spot-x': '50%',
                '--spot-y': '50%',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.03)',
                background: 'rgba(255,255,255,0.01)',
                transition: 'border-color 0.5s',
                ...style
            }}
        >
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                    opacity,
                    background: 'radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgba(255,255,255,0.06), transparent 40%)',
                    transition: 'opacity 0.2s',
                    zIndex: 0
                }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default HighlightCard;
