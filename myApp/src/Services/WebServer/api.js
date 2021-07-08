import axios from 'axios';

const api = axios.create({
  //todo: use right API URL
  //baseURL: 'http://18.230.187.61/api', //UTFPR
  //baseURL: 'http://192.168.0.9:1337/api', //LOCAL
  baseURL: 'http://192.168.0.9:1337',
});

api.interceptors.request.use(
  function (request) {
    return request;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default api;
