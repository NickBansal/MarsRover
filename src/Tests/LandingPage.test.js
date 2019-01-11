import './setupTest';
import React from 'react';
import LandingPage from '../Pages/LandingPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('<LandingPage />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<LandingPage />)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})