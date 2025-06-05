const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
  },
  PATIENTS: {
    BASE: `${API_BASE_URL}/patients`,
    BY_ID: (id: number) => `${API_BASE_URL}/patients/${id}`,
  },
  DOCTORS: {
    BASE: `${API_BASE_URL}/doctors`,
    BY_ID: (id: number) => `${API_BASE_URL}/doctors/${id}`,
  },
  APPOINTMENTS: {
    BASE: `${API_BASE_URL}/appointments`,
    BY_ID: (id: number) => `${API_BASE_URL}/appointments/${id}`,
  },
  DASHBOARD: {
    STATS: `${API_BASE_URL}/dashboard/stats`,
  },
}; 