import axios from 'axios';

const API_URL = '/api/doctors';

const getAuthHeaders = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const fetchDoctors = async () => {
  const res = await axios.get(API_URL, getAuthHeaders());
  return res.data.doctors;
};

export const fetchDoctorById = async (id: number) => {
  const res = await axios.get(`${API_URL}/${id}`, getAuthHeaders());
  return res.data.doctor;
};

export const createDoctor = async (data: any) => {
  const res = await axios.post(API_URL, data, getAuthHeaders());
  return res.data.doctor;
};

export const updateDoctor = async (id: number, data: any) => {
  const res = await axios.put(`${API_URL}/${id}`, data, getAuthHeaders());
  return res.data.doctor;
};

export const deleteDoctor = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
}; 