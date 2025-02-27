# Portfohlio

Welcome to my Portfohlio (a play on my last name, Fohl) - a showcase of my professional experience and technical capabilities. This project serves both as my online resume and a demonstration of modern web development and DevOps practices.

## 🌟 Features

- Next.js-powered portfolio website
- Responsive design with Tailwind CSS
- Interactive resume download link
- Personal podcast player with playback controls
- Docker containerization
- Comprehensive unit testing
- Static code analysis with SonarQube
- Automated CI/CD pipeline with GitHub Actions
- GitHub Pages deployment

## 🎯 User Experience Features

### Resume Download
The portfolio includes a convenient resume download link in the navigation bar. Users can easily download a copy of my professional resume in DOCX format for offline reference.

### Personal Podcast Player
A unique feature of this portfolio is the integrated podcast player that showcases my "Tech Talk Daily" podcast. The player appears as a sleek component at the bottom of the screen with play/pause functionality, allowing visitors to listen to my tech insights while browsing the portfolio.

## 🛠️ Technology Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest with React Testing Library
- **Code Quality**: 
  - ESLint for code linting
  - SonarQube for static code analysis
- **DevOps**:
  - Docker for containerization
  - GitHub Actions for CI/CD
  - GitHub Pages for hosting

## 🚀 Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Docker Development

```bash
# Build and run with Docker Compose
docker compose up --build

# Or build and run Docker container directly
docker build -t portfohlio .
docker run -p 3000:3000 portfohlio
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## 🧪 Testing

```bash
# Run unit tests
npm test

# Generate coverage report
npm run test:coverage
```

## 📊 Quality Metrics

- Unit Test Coverage: [Add your coverage percentage]
- SonarQube Quality Gate: [Add status]
- GitHub Actions Build: [![GitHub Actions Status](https://github.com/brianfohl/portfohlio/actions/workflows/pages.yml/badge.svg)](https://github.com/brianfohl/portfohlio/actions)

## 📝 Development Practices

This project demonstrates several modern development practices:

- **Test-Driven Development (TDD)**: Comprehensive unit tests with good coverage
- **Continuous Integration**: Automated testing and code analysis on every push
- **Continuous Deployment**: Automatic deployment to GitHub Pages
- **Container Strategy**: Multi-stage Docker builds for optimized production images
- **Code Quality**: Automated code quality checks with SonarQube

## 🌐 Deployment

The site is automatically deployed to GitHub Pages through GitHub Actions. The deployment pipeline includes:

1. Code quality checks
2. Unit testing
3. Static code analysis
4. Build and deployment

Visit https://brianfohl.github.io/portfohlio/ to see the live site.

## 📖 Project Structure

```
portfohlio/
├── app/                    # Next.js application files
│   ├── __tests__/         # Unit tests
│   ├── components/        # React components
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── __mocks__/            # Jest mocks
├── coverage/             # Test coverage reports
├── public/               # Static assets
│   ├── podcast.mp3      # Podcast audio file
│   ├── background.jpg   # Background images
│   └── brian-fohl-resume.docx # Downloadable resume
├── .github/              # GitHub Actions workflows
│   └── workflows/
│       ├── code-analysis.yml
│       └── pages.yml
├── node_modules/         # Dependencies
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── .dockerignore        # Docker ignore file
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── jest.config.mjs      # Jest configuration
├── jest.setup.js        # Jest setup file
└── eslint.config.mjs    # ESLint configuration
```

## 🤝 Contributing

While this is primarily a personal portfolio project, I welcome feedback and suggestions! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with 💻 by Brian Fohl