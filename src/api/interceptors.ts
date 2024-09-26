import axios, { type CreateAxiosDefaults } from "axios";
import { toast } from "react-toastify";

const options: CreateAxiosDefaults = {
    baseURL: "https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=Batman&page=2",
    headers: {
        "Content-Type": "application/json",
    },
};

const axiosClassic = axios.create(options);

axiosClassic.interceptors.response.use(
    (config) => config,
    async (error) => {
        console.log(error?.response);
        if (error?.response && error?.response.status > 201) {
            toast.error(error.response?.data?.message, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    },
);

export { axiosClassic };
