import axios from "axios";
const USER = "http://localhost:3000/user";

const register = async (data) => {
    try{
        const response = await axios.post(`${USER}/register`, data);
        return response.data;
    } catch(error){
        console.error('Register error: ', error);
        throw error;
    }
};

const login = async (data) => {
    try{
        const response = await axios.post(`${USER}/login`, data);
        return response.data;
    } catch(error){
        console.error('Login error: ', error);
        throw error;
    }
};

const userService = {
    register,
    login,
};

export default userService;