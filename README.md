
---

# 🚀 Event Management System

A full-stack **Event Management System** with role-based access for **Admin**, **Employees**, and **Users**.
Built using **React (frontend)**, **Node.js (backend)**, and **MongoDB (database)**.

---

## 📂 Features

### 👑 Admin

* Manage employees & users
* Create, update, delete events
* Assign tasks to employees or users
* Full control over system data

### 👨‍💻 Employee

* Login via employee portal
* Create & update events, reminders, and tasks
* Assign tasks to themselves or users
* View and manage scheduled events
* Scoped data access (employee-specific)

### 🙋‍♂️ User

* View events and reminders
* Track progress from start to finish
* See updated event formats
* No create or edit permissions

---

## 🛠️ Tech Stack

* **Frontend**: React + Vite + TailwindCSS
* **Backend**: Node.js + Express
* **Database**: MongoDB
* **Auth**: Role-based (Admin, Employee, User)

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/event_management.git
cd event_management
```

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs the React app at `http://localhost:5173` (or shown port).

### 3. Setup Backend

```bash
cd backend
npm install
npm run dev
```

Runs Node.js API at `http://localhost:5000`.

### 4. Setup Database (MongoDB)

* Install MongoDB locally or use **MongoDB Atlas**.
* Create a `.env` file in `/backend` with:

```env
MONGO_URI=your_connection_string
JWT_SECRET=your_secret
PORT=5000
```

---

## 🖥️ Usage

1. **Admin Login** → Full access (dashboard, employees, users, events, tasks).
2. **Employee Login** → Limited access (their own events, tasks, reminders).
3. **User Login** → Read-only (events, reminders, progress tracker).

---

## 🎨 UI / Styling

* Gradient headers and sidebar
* Clean dashboard with charts, lists, and quick actions
* Consistent look across Admin, Employee, and User portals

---

## 🚧 Roadmap

* ✅ Admin panel (Dashboard, Lists, Forms)
* 🚧 Employee panel (scoped CRUD)
* 🚧 User panel (view-only portal)
* 🔐 Authentication (JWT-based)
* 🌍 Deployment (Render/Netlify + MongoDB Atlas)

---

## 🤝 Contributing

1. Fork repo
2. Create feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push branch (`git push origin feature-name`)
5. Open PR

---

## 📜 License

This project is licensed under the **MIT License**.

---
