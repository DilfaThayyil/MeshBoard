
# Meshboard 🧩

Meshboard is a **developer collaboration platform** built with a **microservice architecture**. It provides a centralized workspace where developers can **chat**, **manage tasks**, **track teams**, and **collaborate in real-time** , all while integrating modern DevOps and software workflows.

> Built with ❤️ using **Next.js (App Router)**, **TypeScript**, **Socket.IO**, **Tailwind CSS**, and a custom microservices backend.

---

## 🚀 Features

* 🔐 JWT/Session-based Auth with GitHub login support
* 🧩 Microservice-based architecture (Auth, User, Project, Chat, Task, Notification, etc.)
* 💬 Real-time Chat using Socket.IO
* 📋 Task Boards (Kanban-style)
* 🗂️ Project & Team Management
* 🔔 Notification System
* 📁 File uploads (Docs, Code, Assets)
* 👥 Admin panel with user role management
* 🧪 Built for scaling: Dockerized, API Gateway, service discovery

---

## 🖥️ Tech Stack

### 🧭 Frontend

* **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/docs/app)
* **UI**: [Tailwind CSS](https://tailwindcss.com/), [ShadCN/UI](https://ui.shadcn.com/)
* **State**: Zustand 
* **Forms**: React Hook Form + Zod
* **Realtime**: Socket.IO Client
* **Auth**: JWT 
* **Deploy**: Vercel 

### 🧱 Backend (Microservices)

> Microservices are separate, scalable services. You can deploy them independently.

* **Auth Service** (JWT, OAuth2)
* **User Service**
* **Project/Task Service**
* **Chat Service** (WebSocket server)
* **Notification Service**
* **API Gateway** (Reverse proxy, token validation)

All written in **Node.js + TypeScript + Express** + MongoDB

---

## 🗂️ Monorepo Structure (Planned)

```bash
meshboard/
├── frontent/
├── gateway/
├── packages/              
├── services/             
│   ├── auth-service/
│   ├── user-service/
│   ├── project-service/
│   ├── chat-service/
│   └── notification-service/
├── docker-compose.yml
├── .gitignore
└── README.md             
```

---

## 🛠️ Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/meshboard.git
cd meshboard
```

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Run Microservices (in `services/`)

Each microservice has its own `README.md`. Example:

```bash
cd services/auth-service
npm install
npm run dev
```

Or run all services via `docker-compose` (WIP).

---

## 📦 Environment Variables (Frontend)

Create a `.env.local` file inside the `frontend/` directory:

```env
NEXT_PUBLIC_GATEWAY_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_key
```

---

## 📡 API Communication

The frontend communicates with the microservices via an **API Gateway**, which handles:

* ✅ JWT verification
* 🚀 Routing requests to services
* 🧼 Error formatting
* ⏳ Rate limiting *(planned)*

---

## 📊 Roadmap

* [x] Next.js frontend with App Router
* [x] JWT Auth & Session Middleware
* [x] Project + Task UI
* [x] Socket.IO integration
* [ ] Realtime notifications
* [ ] GitHub/Google OAuth via Auth Service
* [ ] Admin dashboard
* [ ] Drag-and-drop task boards
* [ ] Dockerize full stack
* [ ] Production CI/CD setup

---

## 🧑‍💻 Author

**Dilfa Thayyil** – [LinkedIn](https://www.linkedin.com/in/dilfa-thayyil)
Software Developer
Building Meshboard to help devs collaborate smarter 🚀

---

## 📃 License

[MIT](./LICENSE)

---

## ⭐ Star this repo

If you like this project or find it useful, please give it a **star** — it motivates and supports future development!

---

