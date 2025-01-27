import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import loginImage from '../Images/login_logo.jpg';

const LoginValidation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [userId, setUserId] = useState(null); 


console.log(userId)
   useEffect(() => {
      const storedUserId = localStorage.getItem('userId'); 
      if (storedUserId) {
        setUserId(storedUserId);
      }
    }, []);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    let errors = {};

    if (!email) {
      errors.email = 'Email is required.';
    } else if (!validateEmail(email)) {
      errors.email = 'Invalid email format.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (!validatePassword(password)) {
      errors.password =
        'Password must be at least 8 characters long and include both letters and numbers.';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      toast.success('Login successful!');
      navigate('/');
      localStorage.setItem('userId',10);
    } else {
      toast.error('Please fix the errors before submitting.');
    }
  };

  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div
          className="row w-100"
          style={{
            maxWidth: '900px',
            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
          }}
        >
          <div className="col-md-6 p-4">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Login</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className={`form-control ${formErrors.email && 'is-invalid'}`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <div className="text-danger mt-1">{formErrors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className={`form-control ${
                      formErrors.password && 'is-invalid'
                    }`}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {formErrors.password && (
                    <div className="text-danger mt-1">{formErrors.password}</div>
                  )}
                </div>
                <button type="submit" className="btn bg-black text-white w-100 ">
                  Login
                </button>
              </form>
              <div className="mt-3 text-center">
                <a
                  href="/forgot-password"
                  className="text-decoration-none text-primary"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block p-0 ">
            <img
              src={loginImage}
              alt="Login Illustration"
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default LoginValidation;
