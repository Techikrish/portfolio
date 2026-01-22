import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Box, Cloud, Shield, Database, Layout, Code, Server, GitBranch, Monitor } from 'lucide-react';
import Section from './Section';
import HighlightCard from './HighlightCard';

// Tools data with updated categorization
const tools = [
    { name: 'Kubernetes', icon: <Box size={24} />, category: 'Orchestration' },
    { name: 'Terraform', icon: <Database size={24} />, category: 'IaC' },
    { name: 'AWS', icon: <Cloud size={24} />, category: 'Cloud Provider' },
    { name: 'Docker', icon: <Layout size={24} />, category: 'Containerization' },
    { name: 'Jenkins', icon: <Server size={24} />, category: 'CI/CD' },
    { name: 'Python', icon: <Code size={24} />, category: 'Scripting' },
    { name: 'Linux', icon: <Terminal size={24} />, category: 'OS' },
    { name: 'Git', icon: <GitBranch size={24} />, category: 'Version Control' },
    { name: 'Prometheus', icon: <Monitor size={24} />, category: 'Monitoring' },
    { name: 'Ansible', icon: <Shield size={24} />, category: 'Configuration' }
];

const AppCard = ({ tool, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
    >
        <HighlightCard style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            gap: '1rem',
            height: '100%',
            background: 'transparent' // Maximizing void effect
        }}>
            <div style={{ color: '#fff', opacity: 0.9 }}>
                {tool.icon}
            </div>
            <div style={{ textAlign: 'center' }}>
                <h4 style={{
                    color: '#fff',
                    fontSize: '1rem',
                    marginBottom: '0.2rem',
                    fontFamily: 'var(--font-heading)'
                }}>{tool.name}</h4>
                <span style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: 'var(--font-body)'
                }}>{tool.category}</span>
            </div>
        </HighlightCard>
    </motion.div>
);

const Apps = () => {
    return (
        <Section id="apps" title="Daily Arsenal">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                gap: '1.5rem'
            }}>
                {tools.map((t, i) => <AppCard key={i} tool={t} index={i} />)}
            </div>
        </Section>
    );
};

export default Apps;
