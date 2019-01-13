import '../setupTest';
import React from 'react'
import SearchItems from '../Pages/SearchItems';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import fakeData from '../__mocks__/testData'
import sinon from 'sinon'

describe.only('<SearchPage />', () => {
    let wrapper
    
    beforeEach(() => {
        const SearchProps = {
            allItems: fakeData[0].collection.items,
            handleClick: () => {},
            input: ''
        }
        wrapper = shallow(<SearchItems {...SearchProps}/>)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('Changes input props matching the slected value', () => {
        const handleClick = sinon.spy();
        console.log(wrapper.debug())
        // wrapper.find('input').simulate('click');
        // expect(wrapper.props().input).toBe(0)
    })
})