import axios from 'axios'
const API_URL = 'https://images-api.nasa.gov'

export const getItems = async input => {
  const { data } = await axios.get(`${API_URL}/search?q=${input}`)
  return data.collection.items
}

export const assetData = async nasaId => {
  const { data } = await axios.get(`${API_URL}/asset/${nasaId}`)
  return data.collection.items
}
