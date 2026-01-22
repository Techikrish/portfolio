import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Folder, BookOpen, Mail } from 'lucide-react';

const DockItem = ({ icon: Icon, label, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="dock-item"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease'
            }}
        >
            <Icon size={24} strokeWidth={1.5} />
            <span style={{
                position: 'absolute',
                top: '-30px',
                fontSize: '0.75rem',
                background: 'rgba(0,0,0,0.8)',
                padding: '4px 8px',
                borderRadius: '4px',
                opacity: 0,
                transition: 'opacity 0.2s',
                pointerEvents: 'none',
                whiteSpace: 'nowrap'
            }} className="dock-label">
                {label}
            </span>
            <style>{`
                .dock-item:hover { color: #fff; transform: translateY(-5px); }
                .dock-item:hover .dock-label { opacity: 1; }
            `}</style>
        </div>
    );
};

const Dock = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            // Small delay to allow navigation to complete before scrolling
            setTimeout(() => {
                const element = document.querySelector(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (id === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            display: 'flex',
            gap: '1rem',
            padding: '12px 24px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)'
        }}>
            <DockItem icon={Home} label="Home" onClick={() => handleNavigation('#home')} />
            <DockItem icon={Folder} label="Projects" onClick={() => handleNavigation('#projects')} />
            <DockItem icon={BookOpen} label="Blog" onClick={() => handleNavigation('#blog')} />
            {/* <DockItem icon={AppWindow} label="Apps" onClick={() => handleNavigation('#apps')} /> */}
            <DockItem icon={Mail} label="Contact" onClick={() => window.location.href = 'mailto:krishnafattepurkar@gmail.com'} />
        </div>
    );
};

export default Dock;
