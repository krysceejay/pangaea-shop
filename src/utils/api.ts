import axios from 'axios'

const baseURL = 'https://pangaea-interviews.vercel.app/api/graphql'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err)
  },
);

export default api
