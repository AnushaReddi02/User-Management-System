# 🌟 User Management System – Node.js, Express & MySQL

This is my **first full-stack project** using **Node.js, Express, MySQL, and EJS**.  
It’s a simple yet powerful **User Management System** where user data is stored in a MySQL database and displayed dynamically with EJS templates.

---

## 🚀 Features
- 🔹 Insert fake users using [`@faker-js/faker`](https://www.npmjs.com/package/@faker-js/faker)  
- 🔹 Home page showing total user count  
- 🔹 View all users in a clean table layout (`/showUsers`)  
- 🔹 Edit user details securely (password check before update)  
- 🔹 Update username in the database  
- 🔹 Method override enabled for PATCH requests  
- 🔹 EJS templating for rendering dynamic views  

---

## 🛠️ Tech Stack
- **Node.js** – Backend runtime  
- **Express.js** – Web framework  
- **MySQL** – Database  
- **EJS** – View engine  
- **faker.js** – Fake data generator  
- **method-override** – To support PATCH/DELETE in forms  

---

## 📂 Project Structure
📦 user-management-system
┣ 📂 views
┃ ┣ 📜 home.ejs
┃ ┣ 📜 showUsers.ejs
┃ ┗ 📜 edit.ejs
┣ 📜 index.js # main server file
┣ 📜 package.json
┗ 📜 README.md


---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```
git clone https://github.com/AnushaReddi02/User-Management-System.git
cd user-management-system

```

### 2️⃣ Install dependencies

```
npm install

```

### 3️⃣ Setup Database

- Create a database in MySQL (example: MySQL_Node_Express)

- Create a users table with columns:

```

CREATE TABLE users (
  id VARCHAR(50) PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL
);
  
```

### 4️⃣ Start the server

```
node index.js
```

### 5️⃣ Open in browser
```
http://localhost:8080 
```

---

## ✨ Learning Outcomes
Through this project, I learned:

- How to connect Node.js with MySQL

- Building RESTful routes with Express

- Handling form data & method override

- Rendering views dynamically using EJS

- Inserting dummy data with faker.js

---
