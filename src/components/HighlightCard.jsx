import React, { useRef, useState } from 'react';

const HighlightCard = ({ children, className = '', style = {} }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
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
                    background: `natural-radial-gradient(
                        600px circle at ${position.x}px ${position.y}px,
                        rgba(255,255,255,0.06),
                        transparent 40%
                    )`,
                    transition: 'opacity 0.2s',
                    zIndex: 0
                }}
            />
            {/* Spotlight Gradient using radial-gradient standard */}
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
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
