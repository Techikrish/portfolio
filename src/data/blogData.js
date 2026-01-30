import blog1 from '../assets/blog1.png';
import cicd from '../assets/cicd.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import blog4 from '../assets/blog4.png';
import eksmistake from '../assets/eksmistake.png';
import cycleerror from '../assets/cycleerror.png';
import n8n from '../assets/n8n.png';
import action from '../assets/action.png';
import ekscluster from '../assets/ekscluster.png';
import http from '../assets/http.png';

export const articles = [
    {
        title: 'Building a Production-Ready CI/CD Pipeline: The Complete 2026 Guide',
        summary: 'This guide walks you through building a CI/CD pipeline thats fast, secure, and reliable.',
        date: 'Jan 08, 2026',
        tags: ['CI/CD', 'GitHub Actions', 'Sonarqube', 'Docker'],
        image: cicd,
        link: 'https://medium.com/@krishnafattepurkar/building-a-production-ready-ci-cd-pipeline-the-complete-2026-guide-b3d6a661ecd8'
    },
    {
        title: 'Building a Production-Ready EKS Cluster: The Complete 2026 Guide',
        summary: 'Running Kubernetes on AWS sounds straightforward until you actually try it. After years of building and breaking EKS clusters...',
        date: 'Jan 08, 2026',
        tags: ['Kubernetes', 'EKS', 'AWS', 'Cluster'],
        image: ekscluster,
        link: 'https://medium.com/@krishnafattepurkar/building-a-production-ready-eks-cluster-the-complete-2026-guide-0c1abecc7587'
    },
    {
        title: 'The Complete Guide to SSL/TLS Certificates: From HTTP to HTTPS',
        summary: 'This comprehensive guide explores SSL/TLS certificates, the transition from HTTP to HTTPS, and why encryption matters.',
        date: 'Dec 11, 2025',
        tags: ['HTTPS', 'SSL', 'TLS', 'Certificates'],
        image: http,
        link: 'https://medium.com/@krishnafattepurkar/the-complete-guide-to-ssl-tls-certificates-from-http-to-https-569706690771'
    },
    {
        title: 'How GitHub Actions Actually Powers the World’s Largest Open-Source Projects',
        summary: 'There is a quiet, tireless, invisible workforce that performs all of this automatically. That workforce is GitHub Actions.',
        date: 'Nov 28, 2025',
        tags: ['Git', 'GitHub Actions', 'CI/CD'],
        image: action,
        link: 'https://medium.com/@krishnafattepurkar/how-github-actions-actually-powers-the-worlds-largest-open-source-projects-a-deep-look-into-ci-cd-ee98d037c787'
    },
    {
        title: 'How n8n is Changing the Way DevOps Teams Automate in the Cloud',
        summary: 'Most engineers think of n8n as a “Zapier alternative.” In reality, n8n can become the automation brain of your DevOps and Cloud ecosystem.',
        date: 'Oct 01, 2025',
        tags: ['AWS', 'n8n', 'Automation', 'Cloud'],
        image: n8n,
        link: 'https://medium.com/@krishnafattepurkar/how-n8n-is-changing-the-way-devops-teams-automate-in-the-cloud-5e2ebd8abcd8'
    },
    {
        title: 'Conquering Terraform Cycle Errors: A Simple Guide from My AWS Project',
        summary: 'Terraform cycle error that stopped everything cold. If you’ve ever faced this, you know how frustrating it is.',
        date: 'Aug 30, 2025',
        tags: ['AWS', 'Terraform', 'Kubernetes', 'IaC'],
        image: cycleerror,
        link: 'https://medium.com/@krishnafattepurkar/conquering-terraform-cycle-errors-a-simple-guide-from-my-aws-project-b3c3ebe9c2cb'
    },
    {
        title: 'How I Accidentally Chose an Extended-Support Kubernetes Version on EKS And Paid Extra',
        summary: 'When you work with Amazon EKS long enough, you realize one thing: Kubernetes versions matter.',
        date: 'Dec 20, 2025',
        tags: ['AWS', 'Terraform', 'Kubernetes'],
        image: eksmistake,
        link: 'https://medium.com/@krishnafattepurkar/how-i-accidentally-chose-an-extended-support-kubernetes-version-on-eks-and-paid-extra-because-i-6bbad34d2d4d'
    }
];
