import '../setupTest';
import React from 'react';
import SingleItem from '../Pages/SingleItem';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe.only('<SingleItem />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<SingleItem />)
    })

    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})

