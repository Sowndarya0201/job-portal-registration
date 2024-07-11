import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [role, setRole] = useState('jobseeker');
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleVerificationClick = () => {
    setShowVerification(true);
  };

  const renderForm = () => {
    if (role === 'jobseeker') {
      return (
        <>
          <div className="input-group">
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Enter your mobile number" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Enter your current city" />
          </div>

          <div className="input-group">
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create your password"
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
            <input type="text" placeholder="Enter your company name" />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Enter your company email" />
          </div>

          <div className="input-group">
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create your password"
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

        {renderForm()}

        <button className="register-button">Sign Up</button>

        <p className="login-link">
          Already have an account? <a href="http://localhost:3000/">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;



