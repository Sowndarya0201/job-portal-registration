// src/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Registration from './Registration';

test('renders Sign Up heading', () => {
  render(
    <Router>
      <Registration />
    </Router>
  );
  const headingElement = screen.getByText(/Sign Up/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders Job Seeker and Recruiter buttons', () => {
  render(
    <Router>
      <Registration />
    </Router>
  );
  const jobSeekerButton = screen.getByText(/Job Seeker/i);
  const recruiterButton = screen.getByText(/Recruiter/i);
  expect(jobSeekerButton).toBeInTheDocument();
  expect(recruiterButton).toBeInTheDocument();
});

test('renders form for Job Seeker by default', () => {
  render(
    <Router>
      <Registration />
    </Router>
  );
  const nameInput = screen.getByPlaceholderText(/Enter your name here/i);
  const emailInput = screen.getByPlaceholderText(/Enter your email here/i);
  const passwordInput = screen.getByPlaceholderText(/Enter your password here/i);
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('renders form for Recruiter when Recruiter button is clicked', () => {
  render(
    <Router>
      <Registration />
    </Router>
  );
  const recruiterButton = screen.getByText(/Recruiter/i);
  fireEvent.click(recruiterButton);
  const companyNameInput = screen.getByPlaceholderText(/Enter your company name here/i);
  const companyEmailInput = screen.getByPlaceholderText(/Enter your company email here/i);
  const companyPasswordInput = screen.getByPlaceholderText(/Enter your password here/i);
  expect(companyNameInput).toBeInTheDocument();
  expect(companyEmailInput).toBeInTheDocument();
  expect(companyPasswordInput).toBeInTheDocument();
});

test('renders social media icons', () => {
  render(
    <Router>
      <Registration />
    </Router>
  );
  const googleIcon = screen.getByAltText(/Google/i);
  const facebookIcon = screen.getByAltText(/Facebook/i);
  const linkedInIcon = screen.getByAltText(/LinkedIn/i);
  expect(googleIcon).toBeInTheDocument();
  expect(facebookIcon).toBeInTheDocument();
  expect(linkedInIcon).toBeInTheDocument();
});

test('renders Log In link', () => {
  render(
    <Router>
      <Registration />
    </Router>
  );
  const loginLink = screen.getByText(/Log In/i);
  expect(loginLink).toBeInTheDocument();
});
