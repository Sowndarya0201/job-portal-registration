import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';

const Registration = () => {
  const [role, setRole] = useState('jobseeker');
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    companyName: '',
    companyEmail: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleVerificationClick = () => {
    setShowVerification(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', {
        role,
        ...formData,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error registering!', error);
      alert('Registration failed!');
    }
  };

  const renderForm = () => {
    if (role === 'jobseeker') {
      return (
        <>
          <div className="input-group">
            <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} />
          </div>

          <div className="input-group">
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
          </div>

          <div className="input-group">
            <input type="text" name="mobile" placeholder="Enter your mobile number" onChange={handleChange} />
          </div>

          <div className="input-group">
            <input type="text" name="city" placeholder="Enter your current city" onChange={handleChange} />
          </div>

          <div className="input-group">
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create your password"
                onChange={handleChange}
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </span>
            </div>
          </div>

          <button className="verify-email-button" onClick={handleVerificationClick}>
            Verify Email
          </button>

          {showVerification && (
            <div className="verification-container">
              <div className="verification-code">
                <input type="text" maxLength="1" className="verification-input" />
                <input type="text" maxLength="1" className="verification-input" />
                <input type="text" maxLength="1" className="verification-input" />
                <input type="text" maxLength="1" className="verification-input" />
              </div>
              <p className="enter-otp-text">Enter OTP</p>
            </div>
          )}
        </>
      );
    } else if (role === 'recruiter') {
      return (
        <>
          <div className="input-group">
            <input type="text" name="companyName" placeholder="Enter your company name" onChange={handleChange} />
          </div>

          <div className="input-group">
            <input type="email" name="companyEmail" placeholder="Enter your company email" onChange={handleChange} />
          </div>

          <div className="input-group">
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create your password"
                onChange={handleChange}
              />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </span>
            </div>
          </div>

          <button className="verify-email-button" onClick={handleVerificationClick}>
            Verify Email
          </button>

          {showVerification && (
            <div className="verification-container">
              <div className="verification-code">
                <input type="text" maxLength="1" className="verification-input" />
                <input type="text" maxLength="1" className="verification-input" />
                <input type="text" maxLength="1" className="verification-input" />
                <input type="text" maxLength="1" className="verification-input" />
              </div>
              <p className="enter-otp-text">Enter OTP</p>
            </div>
          )}
        </>
      );
    }
  };

  return (
    <div className="registration-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <div className="registration-box">
        <h2>Sign Up</h2>

        <div className="role-selection">
          <button 
            className={`role-button ${role === 'jobseeker' ? 'active' : ''}`} 
            onClick={() => setRole('jobseeker')}
          >
            Job Seeker
          </button>
          <button 
            className={`role-button ${role === 'recruiter' ? 'active' : ''}`} 
            onClick={() => setRole('recruiter')}
          >
            Recruiter
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {renderForm()}

          <button type="submit" className="register-button">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;

