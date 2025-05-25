# Meshboard 🧩

**Meshboard** is a real-time, microservices-based team collaboration platform designed for developers. It brings together task management, project planning, messaging, file sharing, and live code collaboration — all in one beautifully engineered system.

> Built using Node.js, React, MongoDB, RabbitMQ, Docker, and WebSockets.

---

## 🌟 Features

- 🔐 **Authentication Service**
  - JWT & GitHub OAuth login
  - Role-based access control (Admin, Developer, Manager)

- 📁 **Project & Team Management**
  - Create teams and projects
  - Invite and assign members
  - Set roles and permissions

- 📋 **Task Service (Kanban Board)**
  - Drag & drop tasks across statuses
  - Real-time updates with WebSocket
  - Priorities, deadlines, comments

- 💬 **Chat & Notifications**
  - Real-time messaging (1:1 and group chat)
  - Notification service via RabbitMQ

- 🧾 **Code Snippets**
  - Share live code using Monaco Editor
  - Syntax highlighting and collaborative snippets

- ☁️ **File Upload**
  - Upload files to Cloudinary or S3
  - Attach to tasks or chats

---

## 🧱 Tech Stack

| Layer | Tech |
|-------|------|
| **Frontend** | React.js + Tailwind CSS (or Next.js) |
| **Backend** | Node.js + Express/Nest.js |
| **Database** | MongoDB (per service or shared) |
| **Messaging** | RabbitMQ / Kafka |
| **Realtime** | Socket.IO |
| **Auth** | JWT + GitHub OAuth |
| **DevOps** | Docker, Docker Compose, GitHub Actions |

---
