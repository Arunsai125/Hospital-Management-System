import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  LocalHospital as HospitalIcon,
  EventNote as EventIcon,
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const features = [
  {
    title: 'Dashboard',
    description: 'View hospital statistics and manage daily operations',
    icon: <DashboardIcon sx={{ fontSize: 40 }} />,
    path: '/dashboard',
  },
  {
    title: 'Patients',
    description: 'Manage patient records and medical history',
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    path: '/patients',
  },
  {
    title: 'Doctors',
    description: 'Manage doctor profiles and schedules',
    icon: <HospitalIcon sx={{ fontSize: 40 }} />,
    path: '/doctors',
  },
  {
    title: 'Appointments',
    description: 'Schedule and manage patient appointments',
    icon: <EventIcon sx={{ fontSize: 40 }} />,
    path: '/appointments',
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Hospital Management System
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A comprehensive solution for managing hospital operations
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Box sx={{ mb: 2, color: 'primary.main' }}>{feature.icon}</Box>
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate(feature.path)}
                  disabled={!isAuthenticated}
                >
                  {isAuthenticated ? 'Access' : 'Login to Access'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 