import axios from 'axios';

const BASE_URL = 'http://localhost:8091';
const USER_API = `${BASE_URL}/api/users`;
const BOOKING_API = `${BASE_URL}/api/appointments`;
const DOCTOR_API = `${BASE_URL}/api/doctors`;

export const userApi = {
  registerUser: (formData) =>
    axios.post(`${USER_API}/register`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  loginUser: (email, password) =>
    axios.post(`${USER_API}/login`, { email, password }),

  getUserByEmail: (email) =>
    axios.get(`${USER_API}/user`, { params: { email } }),

  getUserById: (id) =>
    axios.get(`${USER_API}/${id}`),

  updateUser: (id, updatedUser) =>
    axios.put(`${USER_API}/update/${id}`, updatedUser),

  getAllUsers: () =>
    axios.get(`${USER_API}/all`),

  deleteUser: (id) =>
    axios.delete(`${USER_API}/${id}`),
};

export const bookingApi = {
  createBooking: (bookingData) =>
    axios.post(BOOKING_API, bookingData),

  getBookingsByUserId: (userId) =>
    axios.get(`${BOOKING_API}/user/${userId}`),

  getAllBookings: () =>
    axios.get(BOOKING_API),

  cancelBooking: (id) =>
    axios.put(`${BOOKING_API}/${id}/cancel`),

  deleteBooking: (id) =>
    axios.delete(`${BOOKING_API}/${id}`),
};

export const doctorApi = {
  getAllDoctors: () =>
    axios.get(DOCTOR_API),

  getDoctorById: (id) =>
    axios.get(`${DOCTOR_API}/${id}`),
};
