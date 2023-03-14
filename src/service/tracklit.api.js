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
            throw new Error("Ocorreu um erro ao autenticar o usuário ", e)
        }
    }
}

export default TrackltService