import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Lock, Terminal, Cpu, Cloud, Server, Activity } from 'lucide-react';
import Section from './Section';
import HighlightCard from './HighlightCard';

// Import project images
import shieldCommit from '../assets/shieldcommit.png';
import flappyDevSecOps from '../assets/flappydevsecops.png';
import mlopsPredictor from '../assets/ml-insurance.png';
import awsIamMonitor from '../assets/iam-monitoring.PNG';
import threeTierAws from '../assets/Three-tier-aws.png';
import awsCostOptimizer from '../assets/aws-cost-optimizer.png';

const projects = [
    {
        title: 'ShieldCommit',
        desc: 'Automated security tool to sanitize Git commits. Prevents secrets leakage using pre-commit hooks and real-time scanning.',
        tags: ['Security', 'Git', 'Python'],
        stars: '20+',
        forks: '5',
        icon: <Lock size={20} />,
        link: 'https://github.com/Techikrish/ShieldCommit',
        image: shieldCommit
    },
    {
        title: 'AWS Cost Optimizer',
        desc: 'Automated solution to identify and reduce AWS costs by monitoring usage and recommending internal optimizations.',
        tags: ['AWS', 'Lambda', 'Python', 'FinOps'],
        stars: '15+',
        forks: '3',
        icon: <Cloud size={20} />,
        link: 'https://github.com/Techikrish/AWS-Cost-Optimizer',
        image: awsCostOptimizer
    },
    {
        title: 'Flappybird DevSecOps',
        desc: 'Gamified demonstration of a complete DevSecOps pipeline. Integrates SAST/DAST scanning into a game deployment workflow.',
        tags: ['DevSecOps', 'CI/CD', 'Jenkins'],
        stars: '15',
        forks: '8',
        icon: <Terminal size={20} />,
        link: 'https://github.com/Techikrish/Flappybird-DevSecOps',
        image: flappyDevSecOps
    },
    {
        title: 'MLOps Insurance Predictor',
        desc: 'End-to-end MLOps pipeline for deploying a medical insurance cost prediction model. Uses Docker and cloud deployment.',
        tags: ['MLOps', 'Docker', 'Python'],
        stars: '12',
        forks: '4',
        icon: <Cpu size={20} />,
        link: 'https://github.com/Techikrish/MlOps-insurance-predictor',
        image: mlopsPredictor
    },
    {
        title: 'AWS IAM Key Monitor',
        desc: 'Serverless security solution using Lambda and SES. Automatically tracks and alerts on unused or aging IAM access keys.',
        tags: ['AWS Lambda', 'Security', 'Python'],
        stars: '18',
        forks: '3',
        icon: <Cloud size={20} />,
        link: 'https://github.com/Techikrish/AWS-IAM-Key-Monitoring-with-Lambda-and-SES-Alerts',
        image: awsIamMonitor
    },
    {
        title: '3-Tier AWS Architecture',
        desc: 'Production-grade infrastructure as code (IaC) using Terraform and CloudFormation to provision a highly available 3-tier web app.',
        tags: ['Terraform', 'AWS', 'IaC'],
        stars: '25',
        forks: '10',
        icon: <Server size={20} />,
        link: 'https://github.com/Techikrish/three-tier-architecture-on-aws-terraform-cloudformation-',
        image: threeTierAws
    }
];

const ProjectCard = ({ project, index }) => (
    <motion.a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -5 }}
        style={{ textDecoration: 'none', display: 'block', height: '100%', cursor: 'pointer' }}
    >
        <HighlightCard style={{ height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Image Section */}
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                        zIndex: 1
                    }}></div>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        zIndex: 2,
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(4px)',
                        padding: '6px',
                        borderRadius: '8px',
                        color: 'rgba(255,255,255,0.8)'
                    }}>
                        {project.icon}
                    </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                        fontSize: '1.25rem',
                        marginBottom: '0.8rem',
                        color: '#fff',
                        fontFamily: 'var(--font-body)',
                        fontWeight: '600'
                    }}>
                        {project.title}
                    </h3>

                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem',
                        flex: 1,
                        lineHeight: '1.6'
                    }}>
                        {project.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {project.tags.map(tag => (
                            <span key={tag} style={{
                                fontSize: '0.7rem',
                                color: 'rgba(255,255,255,0.7)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '4px 8px',
                                borderRadius: '100px',
                                background: 'rgba(255,255,255,0.05)'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </HighlightCard>
    </motion.a>
);

const Projects = () => {
    return (
        <Section id="projects" title="Featured Work">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
            </div>
        </Section>
    );
};

export default Projects;
