/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

class TrackltService {
    constructor() {
        this.baseurl = (endpoint = "/") => `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit${endpoint}`;
        this.cache = {
            ...JSON.parse(localStorage.getItem("cache")),
            currentTime: new Date().getTime()
        };
    }

    authenticateUser = async (body) => {
        try {
            const data = await axios.post(this.baseurl("/auth/login"), body);
            return data;
        } catch (e) {
            if (e.response.status === 422) {
                throw new Error("Email ou senha inválidos!");
            }
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
        const url = this.baseurl("/habits");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        if (this.cache[url] && this.cache[url].expires > this.cache.currentTime) {
            const data = this.cache[url].value;
            return data;
        } else {
            try {
                const data = await axios.get(url, config);
                this.setCache(url, data);
                return data;
            } catch (e) {
                throw new Error(e.response.data.message);
            }
        }

    };

    getHabitToday = async (token) => {
        const url = this.baseurl("/habits/today");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        if (this.cache[url] && this.cache[url].expires > this.cache.currentTime) {
            const data = this.cache[url].value;
            return data;
        } else {
            try {
                const data = await axios.get(url, config);
                this.setCache(url, data);
                return data;
            } catch (e) {
                throw new Error(e.response.data.message);
            }
        }
    };

    getHistoric = async (token) => {
        const url = this.baseurl("/habits/history/daily");
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        if (this.cache[url] && this.cache[url].expires > this.cache.currentTime) {
            const data = this.cache[url].value;
            return data;
        } else {
            try {
                const data = await axios.get(url, config);
                this.setCache(url, data)
                return data;
            } catch (e) {
                throw new Error(e.response.data.message);
            }
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

    postDoneHabit = async (id, token) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        try {
            const data = await axios.post(this.baseurl(`/habits/${id}/check`), {}, config);
            return data;
        } catch (e) {
            throw new Error(e.response.data.message);
        }
    };

    postUndoneHabit = async (id, token) => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        try {
            const data = await axios.post(this.baseurl(`/habits/${id}/uncheck`), {}, config);
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
            const data = await axios.delete(this.baseurl(`/habits/${id}`), config);
            return data;
        } catch (e) {
            throw new Error(e.response.data.message);
        }
    };

    setCache = (chave, data) => {
        const date = new Date();
        const expireTime = date.getTime() + (60 * 1000);
        this.cache[chave] = {
            value: data,
            expires: expireTime
        };
        localStorage.setItem("cache", JSON.stringify(this.cache));
    };

    getCache = () => {
        const value = localStorage.getItem("cache");
        this.cache = JSON.parse(value);
    };
}

export default new TrackltService();