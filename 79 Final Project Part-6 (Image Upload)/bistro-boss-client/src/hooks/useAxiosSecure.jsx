import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { LogOut } = useAuth();

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your base URL
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem('access-token');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && [401, 403].includes(error.response.status)) {
          await LogOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [axiosSecure, LogOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
