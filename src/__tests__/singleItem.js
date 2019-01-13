import React from 'react';
import SingleItem from '../Pages/SingleItem';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import '../setupTest';
import testData from "../__mocks__/testData";
import assetData from '../__mocks__/assetData'
import mockAxios from 'axios'

describe.only('<SingleItem />', () => {

    it('Component matches the snapshot', () => {
        const wrapper = mount(<SingleItem />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('componentDidMount Testing', done => {
        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve({
                data: testData
            })
        );
        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve({
                data: assetData
            })
        );
        const wrapper = mount(<SingleItem />)
        
        expect(wrapper.state().loading).toBe(true)
        expect(wrapper.state().assets.length).toBe(0)
        expect(wrapper.state().itemData.length).toBe(0)
        expect(wrapper.find('Loading').exists()).toBe(true)
        console.log(wrapper.debug())

        setTimeout(() => {
            wrapper.update();

            //STATE
            expect(wrapper.state().loading).toBe(false)
            expect(wrapper.state().assets.length).toBe(2)
            expect(wrapper.state().itemData.length).toBe(5)

            // HTML PAGE ELEMENTS
            expect(wrapper.find('div.hvrbox').exists()).toBe(true)
            expect(wrapper.find('.hvrbox-text').text()).toBe('Mars in ColorMars in ColorCreated: 15 years ago')
            expect(wrapper.find('Loading').exists()).toBe(false)
            done()
        }, 50)
    })
})

