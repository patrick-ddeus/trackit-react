import axios from "axios"

class TrackltService{
    constructor(){
        this.baseurl = (endpoint = "/") => `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit${endpoint}`
    }

    authenticateUser = async (body) => {
        try{
            const data = await axios.post(this.baseurl("/auth/login"), body)
            return data
        } catch(e){
            throw new Error(e.response.data.message)
        }
    }

    registerUser = async (body) => {
        try{
            const data = await axios.post(this.baseurl("/auth/sign-up"), body)
            return data
        } catch(e){
            throw new Error(e.response.data.message)
        }
    }
}

export default TrackltService