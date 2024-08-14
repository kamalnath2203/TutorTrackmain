import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StudentEnrollment = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/fetch')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <Container style={{ marginTop: '2rem', padding: '2rem' }}>
      <Typography variant="h4" style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>Student Enrollment</Typography>
      <TableContainer component={Paper} style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <Table style={{ minWidth: 650 }}>
          <TableHead>
            <TableRow style={{ backgroundColor: '#4CAF50', color: '#ffffff' }}>
              <TableCell style={{ fontWeight: 'bold', color: '#ffffff' }}>ID</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#ffffff' }}>Firstname</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#ffffff' }}>Lastname</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#ffffff' }}>Email</TableCell>
              {/* <TableCell style={{ fontWeight: 'bold', color: '#ffffff' }}>Enrolled Courses</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.id} style={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.email}</TableCell>
                {/* <TableCell>{student.enrolledCourses}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default StudentEnrollment;
