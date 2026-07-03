# 🏥 Hospital Management System

A full-stack **Hospital Management System (HMS)** developed using **Java Spring Boot**, **React.js**, and **MySQL**. The application digitalizes hospital operations by providing a centralized platform for patient management, appointment booking, staff administration, and hospital resource allocation.

---

## 📖 Overview

The Hospital Management System is designed to simplify hospital administration through a modern web application. It replaces manual workflows with a responsive interface and secure backend services, enabling administrators and patients to efficiently manage healthcare operations.

The system follows a **client-server architecture**, where:

- **Frontend:** React.js + Vite
- **Backend:** Java Spring Boot
- **Database:** MySQL
- **Communication:** REST APIs using Axios

---

# ✨ Features

## 👤 Patient

- User Registration
- Secure Login
- Profile Management
- Profile Photo Upload
- View Available Doctors
- Book Appointments
- Mock Payment Gateway
- View Booking History

---

## 🩺 Administrator

- Admin Login
- Dashboard
- Manage Patients
- Delete User Accounts
- Manage Staff
- Post Appointment Slots
- Allocate Hospital Beds
- View All Bookings
- Export Resource Data

---

## 👨‍⚕️ Doctor

- Doctor Dashboard
- View Assigned Schedule
- Future-ready module for expansion

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- HTML5
- CSS3

## Backend

- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- Spring Security

## Database

- MySQL

## Tools

- Maven
- Lombok
- Git
- GitHub

---

# 🏗 Architecture

```
                React Frontend
                     │
               Axios REST APIs
                     │
             Spring Boot Backend
                     │
          Spring Data JPA / Hibernate
                     │
                 MySQL Database
```

---

# 📂 Project Structure

```
HospitalManagementSystem/
│
├── backend/
│   ├── controller/
│   ├── entity/
│   ├── repository/
│   ├── service/
│   ├── config/
│   ├── request/
│   └── application.properties
│
├── frontend/
│   ├── src/
│   │   ├── Admin/
│   │   ├── Patient/
│   │   ├── Doctor/
│   │   ├── Auth/
│   │   ├── Common/
│   │   └── pages/
│   │
│   ├── App.jsx
│   ├── api.js
│   └── main.jsx
│
└── README.md
```

---

# ☕ Java Implementation

This project primarily demonstrates Java backend development using Spring Boot.

## Java Concepts Used

- Object-Oriented Programming (OOP)
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism
- Interfaces
- Collections Framework
- Exception Handling
- File Handling
- RESTful Web Services
- Dependency Injection
- MVC Architecture

---

## Spring Boot Features

- REST Controllers
- Dependency Injection
- Spring Data JPA
- Hibernate ORM
- Bean Configuration
- CORS Configuration
- Security Configuration

---

## Java Collections

- List
- Optional
- JpaRepository

---

## Java Annotations

- @SpringBootApplication
- @RestController
- @RequestMapping
- @GetMapping
- @PostMapping
- @PutMapping
- @DeleteMapping
- @Autowired
- @Entity
- @Table
- @Id
- @GeneratedValue
- @Column
- @Service
- @Configuration
- @Bean

---

# 💾 Database

The application uses **MySQL** for persistent storage.

### Main Tables

- Users
- Bookings

The backend uses **Hibernate ORM** to map Java objects directly to relational database tables.

---

# 📸 File Upload

Users can upload profile pictures during registration.

Features:

- Multipart File Upload
- Automatic Filename Generation
- Static File Serving
- Image Persistence

---

# 🔄 Workflow

```
Patient Registration
        │
        ▼
Login
        │
        ▼
Book Appointment
        │
        ▼
Mock Payment
        │
        ▼
Booking Stored in Database
        │
        ▼
View Booking History
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/HospitalManagementSystem.git
```

---

## Backend

Navigate to backend

```bash
cd backend
```

Run Spring Boot

```bash
mvn spring-boot:run
```

Backend runs on

```
http://localhost:8091
```

---

## Frontend

Navigate to frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run project

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 📚 APIs

## User APIs

- Register User
- Login
- Logout
- Update User
- Delete User
- View Users

## Booking APIs

- Create Booking
- View User Bookings
- View All Bookings

---

# 🔐 Security

Current implementation includes:

- Input Validation
- CORS Configuration
- Request Validation

Future improvements:

- JWT Authentication
- BCrypt Password Encryption
- Role-Based Access Control (RBAC)
- HTTPS Deployment

---

# 📈 Future Enhancements

- JWT Authentication
- Real Payment Gateway Integration
- Doctor Appointment Scheduling
- Email Notifications
- SMS Alerts
- Online Consultation
- Medical Records Module
- Inventory Management
- Database Storage for Staff & Beds
- Docker Deployment
- Cloud Hosting

---

# 🎯 Learning Outcomes

This project helped in understanding:

- Full Stack Java Development
- Spring Boot Framework
- REST API Development
- React Integration
- MySQL Database Design
- Hibernate ORM
- MVC Architecture
- File Handling
- State Management
- Software Architecture
- Object-Oriented Programming

---

# 👨‍💻 Developed By

**Sai Eswar**

B.Tech Computer Science & Engineering

Koneru Lakshmaiah Education Foundation (KL University)

---

# 📜 License

This project is developed for educational and academic purposes.
