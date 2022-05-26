import axios from "axios";

export const subscribeToSite = async (firstName, familyName, email, phoneNumber, userName, password) => {
    try {
        const response = await axios.post('/api/register', { firstName, familyName, email, phoneNumber, userName, password });
        const data = await response.data;

        return data;
    } catch (err) {
        if (err.response && err.response.status === 400) {
            throw new Error(err.response.data);
        }
    }
};

export const loginToSite = async (userName, password) => {
    try {
        const response = await axios.post('/api/login', { userName, password });
        const data = await response.data;

        return data;
    } catch (err) {
        if (err.response && err.response.status === 400) {
            throw new Error(err.response.data);
        }
    }
};
