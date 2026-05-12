<<<<<<< HEAD
# 🏢 Employee Management System

![React](https://img.shields.io/badge/React-19.2.5-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-purple?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-4.2-teal?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

A modern **Employee Management System** built with React, Vite, and Tailwind CSS. Features role-based authentication, task assignment, and real-time task tracking.

![Dashboard Screenshot](./screenshots/dashboard.png)

## ✨ Features

### 🔐 Authentication
- **Admin Login**: Full control over task creation and employee management
- **Employee Login**: View assigned tasks with real-time updates
- **Persistent Sessions**: Stays logged in until manual logout

### 👨‍💼 Admin Dashboard
- Create and assign tasks to employees
- View all employees' task status at a glance
- Track task metrics (New, Active, Completed, Failed)
- Responsive design for all screen sizes

### 👷 Employee Dashboard
- View assigned tasks in card layout
- Task status categories: New, Active, Completed, Failed
- One-click refresh to get latest assignments
- Task filtering by status

### 📊 Task Management
- **New Tasks**: Freshly assigned, ready to accept
- **Active Tasks**: Currently working on
- **Completed Tasks**: Successfully finished
- **Failed Tasks**: Need to retry

## 🚀 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| **Admin** | `admin@me.com` | `123` |
| **Employee 1** | `aarav@example.com` | `123` |
| **Employee 2** | `vivaan@example.com` | `123` |
| **Employee 3** | `ishaan@example.com` | `123` |
| **Employee 4** | `ananya@example.com` | `123` |
| **Employee 5** | `krishna@example.com` | `123` |

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **Vite 8** | Build Tool & Dev Server |
| **Tailwind CSS 4** | Styling & Responsive Design |
| **Context API** | State Management |
| **Local Storage** | Data Persistence |

## 📁 Project Structure
employeemanagmentsys/
├── public/
│ └── favicon.svg
├── src/
│ ├── components/
│ │ ├── Auth/
│ │ │ └── Login.jsx
│ │ ├── Dashboard/
│ │ │ ├── Admindashboard.jsx
│ │ │ └── EmployeeDashboared.jsx
│ │ ├── other/
│ │ │ ├── AllTask.jsx
│ │ │ ├── CreateTask.jsx
│ │ │ ├── Header.jsx
│ │ │ └── Tasklisnnumber.jsx
│ │ ├── Tasklist/
│ │ │ ├── Accepttask.jsx
│ │ │ ├── Completetasklist.jsx
│ │ │ ├── Faildtask.jsx
│ │ │ ├── Newtask.jsx
│ │ │ └── Tasklist.jsx
│ │ └── Index.js
│ ├── context/
│ │ └── AuthProvider.jsx
│ ├── utils/
│ │ └── LocalStorage.js
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md


## 🎯 Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/employeemanagmentsys.git

# 2. Navigate to project
cd employeemanagmentsys

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser
# Visit http://localhost:5173/ in your browser
=======
# Employee-managment-system
The Basic Employ Managment System react Project
>>>>>>> 72b513398f260659ef1a76a316414724d9ca4aa8
