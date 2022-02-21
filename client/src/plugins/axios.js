import axios from "axios";

export const AXIOS = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
AXIOS.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    }
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        //refresh token will be handled on axios config
        break;
      case 403:
        //redirect un authorized page
        break;
      case 404:
        //   redirectNotFound();
        break;
    }
    return Promise.reject(error);
  }
);
