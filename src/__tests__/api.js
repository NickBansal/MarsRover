import mockAxios from "axios";
import testData from "../__mocks__/testData";
import assetData from '../__mocks__/assetData'
import * as api from '../api'

describe.only('Testing mock api calls', () => {
    it('Axios search returns all items that matches the query string', async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: { testData }
            })
        );
        const fetchData = await api.getItems('Earth')
        expect(fetchData.testData).toEqual(testData)  
        expect(fetchData.testData.collection.items.length).toBeGreaterThan(1)      
        expect(mockAxios.get).toHaveBeenCalledTimes(1)
        expect(mockAxios.get).toHaveBeenCalledWith("https://images-api.nasa.gov/search?q=Earth")
    })
    it('Axios asset search returns all items media files', async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: { assetData }
            })
        );
        const fetchData = await api.assetData('PIA04778')
        expect(fetchData.assetData).toEqual(assetData)  
        expect(fetchData.assetData.collection.items.length).toBeGreaterThan(1)      
        expect(mockAxios.get).toHaveBeenCalledTimes(2)
        expect(mockAxios.get).toHaveBeenCalledWith("https://images-api.nasa.gov/asset/PIA04778")
    })
})
