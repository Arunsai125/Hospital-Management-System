import axios from 'axios';

const API_URL = '/api/patients';

const getAuthHeaders = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const fetchPatients = async () => {
  const res = await axios.get(API_URL, getAuthHeaders());
  return res.data.patients;
};

export const fetchPatientById = async (id: number) => {
  const res = await axios.get(`${API_URL}/${id}`, getAuthHeaders());
  return res.data.patient;
};

export const createPatient = async (data: any) => {
  const res = await axios.post(API_URL, data, getAuthHeaders());
  return res.data.patient;
};

export const updatePatient = async (id: number, data: any) => {
  const res = await axios.put(`${API_URL}/${id}`, data, getAuthHeaders());
  return res.data.patient;
};

export const deletePatient = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
}; 