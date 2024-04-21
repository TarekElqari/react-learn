import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Home from './components/Home';
import SignIn from './components/SignInSide';
import SignUp from './components/SignUp';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import ExpertDashboard from './components/ExpertDashboard';

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/expert-dashboard" element={<ExpertDashboard />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
