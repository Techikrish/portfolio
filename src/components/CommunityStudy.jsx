import React from 'react';
import { BookOpenCheck, Users, ArrowUpRight } from 'lucide-react';
import Section from './Section';
import HighlightCard from './HighlightCard';
import cncfProjectsGuideImage from '../assets/cncf-projects-guide.png';
import devopsCloudInterviewImage from '../assets/devops-cloud-interview-scenarios.png';

const communityRepos = [
    {
        title: 'CNCF Projects Guide',
        desc: 'A one-stop, plain-language deep reference for CNCF tools across graduated, incubating, sandbox, and archived projects.',
        tags: ['CNCF', 'Kubernetes', 'DevOps', 'SRE'],
        link: 'https://github.com/Techikrish/CNCF-Projects-Guide',
        icon: <BookOpenCheck size={20} />,
        image: cncfProjectsGuideImage
    },
    {
        title: 'DevOps Cloud Interview Scenarios',
        desc: 'Scenario-based DevOps and Cloud interview prep repo with practical questions across AWS, Kubernetes, CI/CD, Terraform, and more.',
        tags: ['Interview Prep', 'DevOps', 'Cloud', 'AWS'],
        link: 'https://github.com/Techikrish/devops-cloud-interview-scenarios',
        icon: <Users size={20} />,
        image: devopsCloudInterviewImage
    }
];

const CommunityCard = ({ repo }) => (
    <a
        href={repo.link}
        target="_blank"
        rel="noreferrer"
        className="smooth-card fade-up"
        style={{ textDecoration: 'none', display: 'block', height: '100%', transform: 'translateZ(0)' }}
    >
        <HighlightCard style={{ height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.65) 100%)',
                        zIndex: 1
                    }}></div>
                    <img
                        src={repo.image}
                        alt={repo.title}
                        loading="lazy"
                        decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ color: 'rgba(255,255,255,0.85)' }}>{repo.icon}</div>
                    <ArrowUpRight size={18} color="rgba(255,255,255,0.6)" />
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '600' }}>{repo.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', flex: 1 }}>{repo.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {repo.tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                fontSize: '0.7rem',
                                color: 'rgba(255,255,255,0.7)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '4px 8px',
                                borderRadius: '100px',
                                background: 'rgba(255,255,255,0.05)'
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                </div>
            </div>
        </HighlightCard>
    </a>
);

const CommunityStudy = () => {
    return (
        <Section id="community-study" title="Community Study">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {communityRepos.map((repo) => (
                    <CommunityCard key={repo.title} repo={repo} />
                ))}
            </div>
        </Section>
    );
};

export default CommunityStudy;
