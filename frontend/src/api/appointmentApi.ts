import axios from 'axios';

const API_URL = '/api/appointments';

const getAuthHeaders = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const fetchAppointments = async () => {
  const res = await axios.get(API_URL, getAuthHeaders());
  return res.data.appointments;
};

export const fetchAppointmentById = async (id: number) => {
  const res = await axios.get(`${API_URL}/${id}`, getAuthHeaders());
  return res.data.appointment;
};

export const createAppointment = async (data: any) => {
  const res = await axios.post(API_URL, data, getAuthHeaders());
  return res.data.appointment;
};

export const updateAppointment = async (id: number, data: any) => {
  const res = await axios.put(`${API_URL}/${id}`, data, getAuthHeaders());
  return res.data.appointment;
};

export const deleteAppointment = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
}; 