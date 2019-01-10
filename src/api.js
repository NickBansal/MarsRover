import axios from 'axios'
const API_URL = 'https://images-api.nasa.gov'

export const getItems = async (input) => {
    const { data } = await axios.get(`${API_URL}/search?q=${input}`)
    return data
}
