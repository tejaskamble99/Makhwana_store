import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import logo from '../../assets/Images/Logo.png';

const API_BASE = 'http://localhost:8080/api/v1/auth';

const AuthForm = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
    });
  };

  const validateForm = () => {
    const { name, email, password, phone, address } = formData;

    if (!email.includes('@')) return 'Invalid email format.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    if (!isLogin) {
      if (name.trim().length < 2) return 'Please enter your full name.';
      if (!/^\d{10}$/.test(phone)) return 'Phone must be a 10-digit number.';
      if (address.trim().length < 5) return 'Address must be at least 5 characters.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMsg = validateForm();
    if (errorMsg) {
      toast.error(errorMsg);
      return;
    }

    setIsSubmitting(true);

    const url = isLogin
      ? `${API_BASE}/login`
      : `${API_BASE}/register`;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      if (isLogin) {
        localStorage.setItem('token', data.token);
        toast.success('Login successful! Redirecting...');
        setTimeout(() => navigate('/'), 1000);
      } else {
        toast.success('Registration successful! You can now log in.');
        setIsLogin(true);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6 py-12 lg:px-8">
      <div className="w-full max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src= {logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          {isLogin ? 'Sign in to your account' : 'Create a new account'}
        </h2>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          {!isLogin && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-900">Full Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">Phone</label>
                <input
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900">Address</label>
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </>
          )}

          {/* Email field */}
          <div>
            <label className="block text-sm font-medium text-gray-900">Email address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
              required
              className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
            />
          </div>

          {/* Password field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900">Password</label>
            <div className="relative mt-2">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm pr-10"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1.5 right-3 text-sm text-indigo-600 cursor-pointer"
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex w-full justify-center rounded-md ${
                isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-500'
              } px-3 py-1.5 text-sm font-semibold text-white shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {isSubmitting ? 'Please wait...' : isLogin ? 'Sign In' : 'Register'}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          {isLogin ? 'Not a member?' : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={handleToggle}
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
