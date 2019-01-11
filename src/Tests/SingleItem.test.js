import './setupTest';
import React from 'react';
import SingleItem from '../Pages/SingleItem';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

describe('<LandingPage />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<SingleItem />)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})