import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { loginThunk } from '../redux/user/authThunks';
import { selectAuthStatus, selectAuthError } from '../redux/user/loginSelectors';
import {  selectError } from '../redux/user/authSelectors';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import backgroundImage from '../assets/Poster/backgroud.jpg';
import { setLoginStatus } from '../redux/user/loginSelectors'
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");  // Quản lý lỗi cục bộ

  const dispatch = useDispatch();
 // const status = useSelector(selectAuthStatus);

  //const error = useSelector(selectAuthError);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginThunk({ email, password }));
    console.log(error);
    if (result.meta.requestStatus === "fulfilled") {
      setLoginStatus(true); // Cập nhật trạng thái toàn cục là đã đăng nhập
      navigate("/shop");
    }else {
      setError("Sai tài khoản hoặc mật khẩu.");  // Gán lỗi khi đăng nhập thất bại
    }
  };
  useEffect(() => {
    if (email || password) {
      setError("");  // Xóa lỗi khi người dùng nhập lại
    }
  }, [email, password]);
  const handleRegisterRedirect = () => {
    navigate("/dangky"); // Điều hướng đến trang đăng ký
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-3xl p-16 border rounded-md shadow-xl bg-white bg-opacity-95">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-lg"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-4 flex items-center text-gray-600 hover:text-gray-800"
              >
                {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="text-lg text-blue-500 hover:underline"
            >
              Forgot Password?
            </button>
            <button
              type="button"
              onClick={handleRegisterRedirect}
              className="text-lg text-blue-500 hover:underline"
            >
              Register
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg hover:bg-blue-600 transition"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-6 text-center text-lg">{error}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
