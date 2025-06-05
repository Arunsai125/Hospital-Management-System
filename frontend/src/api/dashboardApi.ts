import axios from 'axios';

const API_URL = '/api/dashboard/stats';

const getAuthHeaders = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const fetchDashboardStats = async () => {
  const res = await axios.get(API_URL, getAuthHeaders());
  return res.data;
}; 