import '../setupTest';
import React from 'react'
import SearchItems from '../Pages/SearchItems';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import fakeData from '../__mocks__/testData'


describe('<SearchPage />', () => {
    let wrapper
    
    beforeEach(() => {
        const SearchProps = {
            allItems: fakeData.collection.items,
            handleClick: () => {},
            input: ''
        }
        wrapper = shallow(<SearchItems {...SearchProps}/>)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    // it('Changes input props matching the slected value', () => {

        // expect(wrapper.find('input#image').length).toBe(2)
        // wrapper.find('input#video').simulate('click');
        // console.log(wrapper.props())
        // expect(wrapper.props()).toBe(0)
    // })
})