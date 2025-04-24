# Contributing to AI-HUB

## Branching Strategy

- main → Stable production code
- dev → Active development branch
- feature-xxx → New features (e.g., feature-auth, feature-api)

## 🔄 Contribution Workflow

1. git clone `https://github.com/CSC105-2024/G14-AI-Hub.git`
2. _Create a feature branch_: git checkout -b feature-xxx
3. _Commit your changes_:

   ```sh
   git add .
   git commit -m "Added new feature"
   ```

4. _Push to GitHub_: git push origin feature-xxx
5. _Create a Pull Request_ to dev branch and request a review

## ✅ Code Guidelines

- Follow best practices for _React & Express.js_
- Keep commits _small and meaningful_
- Write _clear commit messages_
- Run npm run lint before submitting PRs

## 🛡️ Security & Best Practices

- _Use environment variables_ (.env) for API keys & secrets
- _Validate user input_ to prevent SQL injection
- _Run tests before merging_
