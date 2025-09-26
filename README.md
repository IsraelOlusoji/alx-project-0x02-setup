# Next.js Project Setup and Basics

## 📌 Project Description
This project is a comprehensive introduction to setting up and working with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure.  

You will learn fundamental concepts ranging from initial setup to building interactive components and fetching data from external APIs.

---

## 🎯 Learning Objectives
By completing this project, you will:

- Understand how to scaffold a Next.js application with TypeScript and Tailwind CSS  
- Implement basic routing in Next.js using the Pages Router  
- Create reusable components with TypeScript interfaces  
- Build interactive UI elements (modals, buttons, cards, etc.)  
- Fetch and display data from external APIs  
- Work with component props and state management  
- Build responsive layouts with navigation  
- Structure a Next.js project following best practices  

---

## 🛠️ Requirements
- Node.js (v16 or later)  
- npm or yarn package manager  
- Basic knowledge of React and TypeScript  
- Familiarity with HTML/CSS  
- Git and GitHub account  
- Code editor (VS Code recommended)  

---

## 📂 Project Structure
```bash
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
