# Krishna Fattepurkar | DevOps & Cloud Portfolio

The **Obsidian Void** is a high-performance, cinematic portfolio designed to showcase cloud architecture expertise and DevOps engineering projects. Built with a focus on modern aesthetics ("Deep Dark" theme), interactivity, and speed.

![Portfolio Preview](src/assets/profile.png)

## 🚀 Key Features

*   **Obsidian Void Aesthetic**: True black backgrounds, "Aurora" nebula effects, and glassmorphism.
*   **Spotlight Interactions**: Mouse-tracking radial gradients on all interactive cards.
*   **Responsive Design**: Mobile-first layout with a custom floating "Dock" navigation.
*   **Dynamic Content**: 
    *   **Featured Work**: Curated DevOps/Cloud projects with custom visual assets.
    *   **Knowledge Base**: Technical articles on Kubernetes, Terraform, and CI/CD.
    *   **Study Notes**: Dedicated resources for AWS Certifications.

## 🛠️ Tech Stack

This project is built with a modern, lightweight frontend stack:

*   **Core**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) (Fast, efficient build tool)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) (Complex gestures and layout transitions)
*   **Icons**: [Lucide React](https://lucide.dev/) (Clean, consistent SVG icons)
*   **Routing**: [React Router](https://reactrouter.com/) (Client-side routing with HashHistory for GitHub Pages)
*   **Deployment**: [GitHub Actions](https://github.com/features/actions) + [GitHub Pages](https://pages.github.com/)

## 📦 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Techikrish/devops-portfolio.git
    cd devops-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run locally**:
    ```bash
    npm run dev
    ```
    Visit `http://localhost:5173/devops-portfolio/` to view the site.

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 🚢 Deployment

This project relies on **GitHub Actions** for automated deployment.
Any push to the `main` branch triggers the workflow in `.github/workflows/deploy.yml`, which builds the site and pushes the artifacts to the `gh-pages` branch.

---

© 2026 Krishna Fattepurkar. Designed in the Void.
