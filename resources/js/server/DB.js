import axios from "axios";

export const checkDomainExists = async (domain) => {
    try {
        const response = await axios.post("/api/checkDomainExists", {domain});
        const data = await response.data;

        return data;
    } catch(err) {
        return err;
    }
};

export const addDomain = async (domain, userId) => {
    try {
        const response = await axios.post("/api/addDomain", {domain, userId});
        const data = await response.data;

        return data;
    } catch(err) {
        return err;
    }
};

export const getDomainByUser = async (id) => {
    try {
        const response = await axios.get("/api/getDomainByUser/" + id);
        const data = await response.data;

        return data;
    } catch(err) {
        return err;
    }
};
