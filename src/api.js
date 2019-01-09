import axios from 'axios'
const API_URL = 'https://images-api.nasa.gov'

export const getTopics = async () => {
    const { data } = await axios.get(`${API_URL}/search`)
    return data
}