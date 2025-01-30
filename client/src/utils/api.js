import axios from "axios"

const params = {
    Headers: {
        Authorization: 'Bearer ' + process.env.REACT_STORE_APP_KEY
    },
}

export const fetchDataFromApi = async (url) => {
    try {
        const response = await axios.get(process.env.REACT__APP_DVE_URL + url, params)
        return response.data
    } catch (error) {
        console.log(error)
    }
}