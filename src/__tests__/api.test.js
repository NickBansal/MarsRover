import React from 'react';
import mockAxios from "axios";
import testData from "../__mocks__/testData";
import { shallow } from 'enzyme';
const API_URL = 'https://images-api.nasa.gov'

describe.only('Testing mock api calls', () => {
    it('Makes calls to axios and returns data', () => {

        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    results: [testData]
                }
            })
        );

        const fetchData =  mockAxios.get(`${API_URL}/search?q=mars`)

        expect(mockAxios.get).toHaveBeenCalledTimes(1)
    })
})
