import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/user/authThunks';
import backgroundImage from '../assets/Poster/backgroud.jpg';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
  const { isLoading, error } = useSelector((state) => state.auth);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  //const [temperror,settemperror]=useState(error) ;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
      .unwrap()
      .then(() => {
        toast.success("Đã đăng ký tài khoản thành công!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate("/dangnhap"); // Điều hướng về trang đăng nhập
      })
      .catch((err) => {
        toast.error(err || "Email đã tồn tại vui lòng nhập lại!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  const handleBackToLogin = () => {
    navigate('/dangnhap'); // Điều hướng về trang đăng nhập
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-lg mx-auto mt-10 bg-white bg-opacity-90 shadow-md rounded px-10 pt-8 pb-10">
        <form onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Create Account</h2>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-xs italic mb-6">{error}</p>}

          {/* Submit button */}
          <div className="flex flex-col items-center space-y-4">
            <button
              type="submit"
              className={`${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'
                } text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline`}
              disabled={isLoading}
            >
              {isLoading ? 'Registering...' : 'Create Account'}
            </button>

            {/* Back to Login button */}
            <button
              type="button"
              onClick={handleBackToLogin}
              className="text-blue-500 hover:underline text-sm"
            >
              Back to Login
            </button>
          </div>
        </form>
      </div><ToastContainer />
    </div>
  );
};

export default RegisterForm;
