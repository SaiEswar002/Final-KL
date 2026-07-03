import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';

// Public Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DoctorsPage from './pages/DoctorsPage';

// Auth
import Login from './Auth/Login';

// Admin Pages
import AdminDashboard from './Admin/AdminDashboard';
import ManageUsers from './Admin/ManageStaff';
import PostAppointments from './Admin/PostAppointments';
import ViewAppointments from './Admin/ViewAppointments';
import AllocateResources from './Admin/AllocateResources';

// Doctor Pages
import DoctorDashboard from './Doctor/DoctorDashboard';

// Patient Pages
import PatientDashboard from './Patient/UserProfile';
import BookAppointment from './Patient/BookAppointment';
import ConfirmBooking from './Patient/Payment';
import BookingHistory from './Patient/ViewBooking';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/post-appointment" element={<PostAppointments />} />
        <Route path="/admin/view-appointments" element={<ViewAppointments />} />
        <Route path="/admin/allocate-resources" element={<AllocateResources />} />

        {/* Doctor */}
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />

        {/* Patient */}
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/payment" element={<ConfirmBooking />} />
        <Route path="/booking-history" element={<BookingHistory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
