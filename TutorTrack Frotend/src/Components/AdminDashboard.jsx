import React from 'react';
import { useNavigate } from 'react-router-dom';
import StaffChart from './StaffChart';
import StudentChart from './StudentChart';
import CourseChart from './CourseChart';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button onClick={() => handleNavigate('/student-enrollment')}>Student Enrollment</button>
        <button onClick={() => handleNavigate('/staff-registration')}>Staff Registration</button>
        <button onClick={() => handleNavigate('/fees-status')}>Fees Paid Status</button>
        <button onClick={() => handleNavigate('/important-stats')}>Important Stats</button>
      </div>
      <div className="content">
        <div className="chart-container">
          <h2>Staff Registrations</h2>
          <StaffChart />
          <button onClick={() => handleNavigate('/staff-page')}>View Staff Page</button>
        </div>
        <div className="chart-container">
          <h2>Student Enrollments</h2>
          <StudentChart />
          <button onClick={() => handleNavigate('/student-page')}>View Student Page</button>
        </div>
        <div className="chart-container">
          <h2>Course Distribution</h2>
          <CourseChart />
          <button onClick={() => handleNavigate('/course-page')}>View Course Page</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
