import axios from 'axios';

// const url = 'https://food-recipe-backend-theta.vercel.app/api';

const url = "https://food-q03d.onrender.com/api"

// const url="http://localhost:8080/api"

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/register`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}