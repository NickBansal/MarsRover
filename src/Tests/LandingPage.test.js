import './setupTest';
import React from 'react';
import LandingPage from '../Pages/LandingPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe.only('<LandingPage />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<LandingPage />)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('Checking the amount of elements on the page', () => {
        expect(wrapper.find('.LandingPage').exists()).toBeTruthy()
        expect(wrapper.find('p').length).toBe(1)
    })
})