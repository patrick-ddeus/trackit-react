import axios from "axios";

class TrackltService {
    constructor() {
        this.baseurl = (endpoint = "/") => `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit${endpoint}`;
    }

    authenticateUser = async (body) => {
        try {
            const data = await axios.post(this.baseurl("/auth/login"), body);
            return data;
        } catch (e) {
            throw new Error(e.response.data.message);
        }
    };
    registerUser = async (body) => {
        try {
            const data = await axios.post(this.baseurl("/auth/sign-up"), body);
            return data;
        } catch (e) {
            throw new Error(e.response.data.message);
        }
    };

    getHabits = async (token) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        try {
            const data = await axios.get(this.baseurl("/habits"), config);
            return data;
        } catch (e) {
            throw new Error(e.response.data.message);
        }
    };

    postHabit = async (body, token) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        try {
            const data = await axios.post(this.baseurl("/habits"), body, config);
            return data;
        } catch (e) {
            throw new Error(e.response.data.message);
        }
    };

    deleteHabit = async (id, token) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        try {
            const data = await axios.delete(this.baseurl(`/habits/${id}}`), config);
            return data;
        } catch (e) {
            throw new Error(e.response.data.message);
        }
    };
}

export default TrackltService;