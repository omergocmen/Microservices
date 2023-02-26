import axios from "axios";

const baseAxiosInterceptors = axios.create({
    baseURL: "https://localhost:5000/"
});

baseAxiosInterceptors.interceptors.request.use(
    response => {
        const token = localStorage.getItem("userToken");
        response.headers = { "Authorization": `Bearer ${token}` };
        return response;
    },
    error => {
        throw new Error(error.response.data.message);
    }
);

baseAxiosInterceptors.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    throw Error(error.response.data);
  });
export default baseAxiosInterceptors;
