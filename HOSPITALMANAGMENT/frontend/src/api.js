import axios from 'axios';

const BASE_URL = 'http://localhost:8091';
const USER_API = `${BASE_URL}/api/users`;
const APPOINTMENT_API = `${BASE_URL}/api/appointments`;
const DOCTOR_API = `${BASE_URL}/api/doctors`;

// ---- Auth Token Helper ----

/**
 * Returns the JWT token stored in localStorage after login.
 * The login response now returns { token, id, username, email, role, ... }
 */
const getAuthToken = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.token || null;
  } catch {
    return null;
  }
};

/**
 * Returns an Axios config object with the Authorization header set.
 * Use this for all authenticated API calls.
 */
const authHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getAuthToken()}`,
  },
});

// ---- User / Auth API ----

export const userApi = {
  /**
   * Register a new user (multipart form — supports profile photo upload).
   */
  registerUser: (formData) =>
    axios.post(`${USER_API}/register`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  /**
   * Login — returns { token, id, username, email, role, ... }
   * The token must be stored alongside the user object in localStorage.
   */
  loginUser: (email, password) =>
    axios.post(`${USER_API}/login`, { email, password }),

  getUserByEmail: (email) =>
    axios.get(`${USER_API}/user`, { params: { email }, ...authHeaders() }),

  getUserById: (id) =>
    axios.get(`${USER_API}/${id}`, authHeaders()),

  updateUser: (id, updatedUser) =>
    axios.put(`${USER_API}/update/${id}`, updatedUser, authHeaders()),

  getAllUsers: () =>
    axios.get(`${USER_API}/all`, authHeaders()),

  deleteUser: (id) =>
    axios.delete(`${USER_API}/${id}`, authHeaders()),
};

// ---- Appointment API ----

export const bookingApi = {
  createBooking: (bookingData) =>
    axios.post(APPOINTMENT_API, bookingData, authHeaders()),

  getBookingsByUserId: (userId) =>
    axios.get(`${APPOINTMENT_API}/user/${userId}`, authHeaders()),

  getAllBookings: () =>
    axios.get(APPOINTMENT_API, authHeaders()),

  cancelBooking: (id) =>
    axios.put(`${APPOINTMENT_API}/${id}/cancel`, {}, authHeaders()),

  deleteBooking: (id) =>
    axios.delete(`${APPOINTMENT_API}/${id}`, authHeaders()),
};

// ---- Doctor API ----

export const doctorApi = {
  getAllDoctors: () =>
    axios.get(DOCTOR_API, authHeaders()),

  getDoctorById: (id) =>
    axios.get(`${DOCTOR_API}/${id}`, authHeaders()),
};
