# AI Hub 🚀

## Project Overview

**AI Hub** is a modern e-learning platform built to help users learn and explore Artificial Intelligence concepts in an easy, structured, and interactive way. It is designed for both **students** 🎓 and **instructors** 👨‍🏫, providing a space to create, manage, and participate in AI-related courses.

### Objectives

- 🎯 Provide a platform for AI education and learning
- 👩‍🏫 Enable instructors to create and manage AI courses
- 🔍 Allow students to discover and participate in courses
- 🛠️ Offer structured course management tools
- 💡 Support interactive learning experiences

## Key Features

- **Authentication** 🔐: Secure login and sign-up functionality using **JWT (JSON Web Tokens)** for token-based user sessions.
- **Course Management** 📚: Create, edit, and delete courses with full CRUD operations.
- **Course Discovery** 🔎: Search for courses with advanced filtering options.
- **Course Sorting** 📊: Sort courses by:
- A-Z alphabetical order
- Earliest created
- Latest created
- **User Profile** 👤: Edit user information and upload profile pictures.
- **User Verification** ✅: Email verification system for new accounts.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/CSC105-2024/G14-AI-Hub.git
cd G14-AI-Hub
```

---

## Frontend - React ⚛️

### Tech Stack

- React
- Axios
- React Router DOM
- Tailwind CSS

### Getting Started - React Client

```bash
cd frontend
npm install
npm run dev
```

## Open [http://localhost:5173](http://localhost:5173) to view the app.

## Backend - Node.js (Hono + TypeScript) 🔥

### Tech Stack

- Node.js
- Hono (TypeScript)
- SQLite
- Prisma ORM
- JWT

### API Endpoints

#### User Routes 👥

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | /user/register      | Register a new user     |
| GET    | /user/verify/:token | Verify user email       |
| POST   | /user/login         | Log in an existing user |
| POST   | /user/logout        | Log out a user          |
| PUT    | /user/edit          | Edit user profile info  |
| POST   | /user/upload        | Upload profile picture  |

#### Course Routes 📖

| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| POST   | /course/create     | Create a new course     |
| GET    | /course/get        | Fetch all courses       |
| DELETE | /course/delete/:id | Delete a course         |
| PATCH  | /course/edit/:id   | Edit an existing course |

### Getting Started - Backend Server

```bash
cd backend
npm install
npm run dev
```

Backend runs at [http://localhost:3000](http://localhost:3000) 🌐
