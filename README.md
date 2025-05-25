# Meshboard 🧩

Meshboard is a **developer collaboration platform** built with a **microservice architecture**. It provides a centralized workspace where developers can **chat**, **manage tasks**, **track teams**, and **collaborate in real-time** — all while integrating modern DevOps and software workflows.

> Built with ❤️ using **Next.js (App Router)**, **TypeScript**, **Socket.IO**, **Tailwind CSS**, and a custom microservices backend.

---

## 🚀 Features

- 🔐 JWT/Session-based Auth with support for GitHub login
- 🧩 Microservice-based architecture (Auth, User, Project, Chat, Task, Notification, etc.)
- 💬 Real-time Chat using Socket.IO
- 📋 Task Boards (Kanban-style)
- 🗂️ Project & Team Management
- 🔔 Notification System
- 📁 File uploads (Docs, Code, Assets)
- 👥 Admin panel with user role management
- 🧪 Built for scaling: dockerized, API gateway, service discovery

---

## 🖥️ Tech Stack

### 🧭 Frontend
- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/docs/app)
- **UI**: [Tailwind CSS](https://tailwindcss.com/), [ShadCN/UI](https://ui.shadcn.com/)
- **State**: Zustand / Context
- **Forms**: React Hook Form + Zod
- **Realtime**: Socket.IO Client
- **Auth**: JWT / NextAuth.js (optional)
- **Deploy**: Vercel / Docker

### 🧱 Backend (Microservices)
> Microservices are separate, scalable services. You can deploy them independently.
- **Auth Service** (JWT, OAuth2)
- **User Service**
- **Project/Task Service**
- **Chat Service** (WebSocket server)
- **Notification Service**
- **API Gateway** (Reverse proxy, token validation)
- All written in **Node.js + TypeScript + Express/Koa** + MongoDB

---

## 🗂️ Monorepo Structure (Planned)

```bash
meshboard/
├── frontend/             
├── services/             
│   ├── auth-service/
│   ├── user-service/
│   ├── project-service/
│   ├── chat-service/
│   └── notification-service/
├── gateway/              
├── docker-compose.yml    
└── README.md             


---


🛠️ Local Setup
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/meshboard.git
cd meshboard
2. Setup Frontend
bash
Copy
Edit
cd frontend
npm install
cp .env.example .env.local   
npm run dev
3. Run Microservices (in services/)
Each microservice has its own README.md. You can run them via:

bash
Copy
Edit
cd services/auth-service
npm install && npm run dev
Or use docker-compose (WIP).

📦 Environment Variables (Frontend)
Create a .env.local in frontend/ with:

env
Copy
Edit
NEXT_PUBLIC_GATEWAY_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_key
📡 API Communication
The frontend communicates with the microservices via an API Gateway, which handles:

JWT verification

Routing requests to services

Error formatting

Rate limiting (planned)

📊 Roadmap
 Next.js frontend with App Router

 JWT Auth & Session Middleware

 Project + Task UI

 Socket.IO integration

 Realtime notifications

 GitHub/Google OAuth via Auth Service

 Admin dashboard

 Drag-and-drop task boards

 Dockerize full stack

 Production CI/CD setup

🧑‍💻 Author
Dil – LinkedIn | MERN Stack Developer
Building Meshboard to help devs collaborate smarter 🚀

📃 License
MIT

⭐ Star this repo
If you like this project or find it useful, please give it a star — it motivates and supports future development!