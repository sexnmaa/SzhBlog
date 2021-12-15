import axios from 'axios'
import { message } from 'antd';

const instance = axios.create({
  // baseURL: 'http://123.57.255.87:8000',
  baseURL: 'http://localhost:3000',
  timeout: 3000
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('szh-token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(res => {
  if (res.status === 200) {
    return res.data
  } 
}, err => {
  console.log(err.response);
  if(err.response) {
    message.error(err.response.data || '');
    localStorage.removeItem('szh-token')
  }
})


export default instance