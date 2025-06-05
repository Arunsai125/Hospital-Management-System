# Hospital Management System

A comprehensive hospital management system built with Spring Boot and React.

## Features

- User Authentication and Authorization
- Patient Management
- Doctor Management
- Appointment Scheduling
- Dashboard with Statistics
- Responsive UI

## Tech Stack

### Backend
- Java 11
- Spring Boot 2.7.0
- Spring Security
- Spring Data JPA
- MySQL
- JWT Authentication

### Frontend
- React
- TypeScript
- Material-UI
- React Router
- Axios

## Prerequisites

- Java 11 or higher
- Node.js 14 or higher
- MySQL 8.0 or higher
- Maven

## Getting Started

### Backend Setup

1. Clone the repository
2. Configure MySQL database in `backend/src/main/resources/application.properties`
3. Navigate to the backend directory:
   ```bash
   cd backend
   ```
4. Build the project:
   ```bash
   mvn clean install
   ```
5. Run the application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- POST `/api/auth/login` - User login

### Patients
- GET `/api/patients` - Get all patients
- GET `/api/patients/{id}` - Get patient by ID
- POST `/api/patients` - Create new patient
- PUT `/api/patients/{id}` - Update patient
- DELETE `/api/patients/{id}` - Delete patient

### Doctors
- GET `/api/doctors` - Get all doctors
- GET `/api/doctors/{id}` - Get doctor by ID
- POST `/api/doctors` - Create new doctor
- PUT `/api/doctors/{id}` - Update doctor
- DELETE `/api/doctors/{id}` - Delete doctor

### Appointments
- GET `/api/appointments` - Get all appointments
- GET `/api/appointments/{id}` - Get appointment by ID
- POST `/api/appointments` - Create new appointment
- PUT `/api/appointments/{id}` - Update appointment
- DELETE `/api/appointments/{id}` - Delete appointment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 