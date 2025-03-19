# Contributing to AI-HUB

## Branching Strategy

- main → Stable production code
- dev → Active development branch
- feature-xxx → New features (e.g., feature-auth, feature-api)

## 🔄 Contribution Workflow


1. git clone `https://github.com/CSC105-2024/G14-AI-Hub.git`
2. *Create a feature branch*: git checkout -b feature-xxx
3. *Commit your changes*:

   
   git add .
   git commit -m "Added new feature"
   

5. *Push to GitHub*: git push origin feature-xxx
6. *Create a Pull Request* to dev branch and request a review

## ✅ Code Guidelines

- Follow best practices for *React & Express.js*
- Keep commits *small and meaningful*
- Write *clear commit messages*
- Run npm run lint before submitting PRs

## 🛡️ Security & Best Practices

- *Use environment variables* (.env) for API keys & secrets
- *Validate user input* to prevent SQL injection
- *Run tests before merging*

---

