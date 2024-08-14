import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import CustomAppBar from './Components/AppBar';
import Footer from './Components/Footer';
import Login from './Components/LoginForm';
import Homepage from './Components/Homepage';
import HomepageMain from './Components/HomepageMain';
import Signup from './Components/SignupForm';
import BecomeTutor from './Components/BecomeTutor';
import TutorHome from './Components/TutorHome';
import TopCities from './Components/Topcities';
import AboutUs from './Components/Aboutus';
import Bookingpage from './Components/Bookingpage';
import AdminDashboard from './Components/AdminDashboard';
import StaffPage from './Components/StaffPage';
import StudentPage from './Components/StudentPage';
import CoursePage from './Components/CourseAvailable';
import theme from './Components/Theme'; 
import PaymentPage from './Components/PaymentPage';
import YourCourses from './Components/YourCourses';
import StudentEnrollment from './Components/StudentEnrollment';
import StaffRegistration from './Components/StaffRegistration';
import FeesPaidStatus from './Components/FeespaidStatus';
import TutorLogin from './Components/TutorLogin';
import './App.css';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <CustomAppBar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomepageMain />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/homepage" element={<Homepage />} />
                        <Route path="/course/:id" element={<CoursePage />} />
                        <Route path="/become-tutor" element={<BecomeTutor />} />
                        <Route path="/tutorhome" element={<TutorHome />} />
                        <Route path="/top-cities" element={<TopCities />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/booking/:tutorId" element={<Bookingpage />} />
                        <Route path="/admin-dashboard" element={<AdminDashboard />} />
                        <Route path="/staff-page" element={<StaffPage />} />
                        <Route path="/student-page" element={<StudentPage />} />
                        <Route path="/payment" element={<PaymentPage />} />
                        <Route path="/your-courses" element={<YourCourses />} />
                        <Route path="/student-enrollment" element={<StudentEnrollment />} />
                        <Route path="/staff-registration" element={<StaffRegistration />} />
                        <Route path="/fees-status" element={<FeesPaidStatus />} />
                        <Route path="/tutor-login" element={<TutorLogin />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
