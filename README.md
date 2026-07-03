# 🏥 KL Hospital Management System

A full-stack **Hospital Management System** built with **Spring Boot** (Java) and **React** (Vite), designed as a final-year engineering project.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Backend** | Spring Boot 3.1.4, Spring Security, Spring Data JPA |
| **Database** | MySQL (`hospital_management_db`) |
| **Frontend** | React 19, Vite, React Router DOM v7 |
| **Styling** | Vanilla CSS with custom design system (Inter font) |
| **Email** | EmailJS (Contact form) |
| **ORM** | Hibernate / JPA with Lombok |

---

## 📁 Project Structure

```
HOSPITALMANAGMENT/
├── backend/                  # Spring Boot Application
│   └── src/main/java/com/hms/
│       ├── HospitalManagementApplication.java
│       ├── config/           # SecurityConfig, WebConfig
│       ├── controller/       # UserController, AppointmentController, DoctorController
│       ├── service/          # UserService, AppointmentService
│       ├── repository/       # UserRepository, AppointmentRepository
│       ├── entity/           # User, Appointment
│       ├── dto/              # LoginRequest, AppointmentDTO
│       └── exception/        # ResourceNotFoundException
│
└── frontend/                 # React + Vite Application
    └── src/
        ├── Admin/            # AdminDashboard, ManageUsers, PostAppointment, ViewAppointments, AllocateResources
        ├── Auth/             # Login (with Register tab)
        ├── Common/           # Navbar, Footer
        ├── Doctor/           # DoctorDashboard
        ├── Patient/          # PatientDashboard, BookAppointment, ConfirmBooking, BookingHistory
        ├── pages/            # HomePage, ContactPage, DoctorsPage
        ├── api.js            # Axios API client (userApi, bookingApi, doctorApi)
        └── index.css         # Global design system (CSS variables, components)
```

---

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8.0+

### 1. Database Setup
```sql
CREATE DATABASE hospital_management_db;
```

### 2. Backend Setup
```bash
cd HOSPITALMANAGMENT/backend

# Edit src/main/resources/application.properties
# Set your MySQL password: spring.datasource.password=YOUR_PASSWORD

./mvnw spring-boot:run
```
Backend runs on: `http://localhost:8091`

### 3. Frontend Setup
```bash
cd HOSPITALMANAGMENT/frontend
npm install
npm run dev
```
Frontend runs on: `http://localhost:5173`

---

## 🔑 User Roles

| Role | Access |
|---|---|
| **Patient** | Register, book appointments, view booking history, manage profile |
| **Doctor** | View assigned appointments, schedule overview |
| **Admin** | Full dashboard, manage users, post appointment slots, bed allocation |

### Default Admin Account
Create an admin by registering with `role=admin` via the signup form, or directly insert into the database.

---

## 📡 API Endpoints

### User API (`/api/users`)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register new user |
| POST | `/login` | User login |
| GET | `/all` | Get all users (admin) |
| GET | `/{id}` | Get user by ID |
| PUT | `/update/{id}` | Update user profile |
| DELETE | `/{id}` | Delete user |

### Appointment API (`/api/appointments`)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/` | Create appointment |
| GET | `/` | Get all appointments |
| GET | `/user/{userId}` | Get appointments by user |
| PUT | `/{id}/cancel` | Cancel appointment |
| DELETE | `/{id}` | Delete appointment |

### Doctor API (`/api/doctors`)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Get all doctors |
| GET | `/{id}` | Get doctor by ID |

---

## 🎨 Design System

- **Font**: Inter (Google Fonts)
- **Primary Color**: `#0f4c81` (Hospital Blue)
- **Accent Color**: `#00b4d8` (Medical Teal)
- **Background**: `#f0f4f8`
- **Components**: Cards, Data Tables, Badges, Stat Cards, Alerts, Form Controls

---

## 👨‍💻 Developed By

Final Year B.Tech Computer Science Engineering Project  
**KL University** — Hospital Management System
