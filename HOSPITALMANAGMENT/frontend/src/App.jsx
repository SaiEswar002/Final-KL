import React, { useState } from 'react'; // Added useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Login from './Auth/Login'; // Correctly import Login as a default export
import AdminLogin from './Auth/AdminLogin';
import DoctorsCombined from './pages/DoctorsCombined'; // Import DoctorsCombined component
// import Services from './pages/Services'; // Import DoctorsCombined component
import DoctorDashboard from './Doctor/DoctorDashboard';
import AdminDashboard from './Admin/AdminDashboard';
import PostAppointments from './Admin/PostAppointments'; // Import PostAppointments component
import ViewAppointments from './Admin/ViewAppointments'; // Import ViewAppointments component
import AllocateResources from './Admin/AllocateResources';
import ManageStaff from './Admin/ManageStaff'; // Import ManageStaff component
import UserProfile from './Patient/UserProfile'; // Using UserProfile instead of PatientProfile
import BookAppointment from './Patient/BookAppointment'; // Import BookAppointment component
import Payment from './Patient/Payment'; // Import Payment component
import ViewBooking from './Patient/ViewBooking'; // Import ViewBooking component

function App() {
  const [userRole, setUserRole] = useState(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        return user.role;
      } catch (e) {
        console.error('Invalid user data in localStorage');
      }
    }
    return null;
  });

  return (
    <Router>
      <Header userRole={userRole} setUserRole={setUserRole} />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/post-appointments" element={<PostAppointments />} />
          <Route path="/admin/view-appointments" element={<ViewAppointments />} />
          <Route path="/admin/allocate-resources" element={<AllocateResources />} />
          <Route path="/admin/manage-staff" element={<ManageStaff />} /> {/* Added ManageStaff route */}
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/view-booking" element={<ViewBooking />} />
          <Route path="/doctors" element={<DoctorsCombined />} />
          {/* <Route path="/Services" element={<Services />} /> */}

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
