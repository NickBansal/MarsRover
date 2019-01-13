import '../setupTest';
import React from 'react'
import SearchItems from '../Pages/SearchItems';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

describe.only('<SearchPage />', () => {
    let wrapper
    const SearchProps = {
        allItems: [],
        handleClick: () => {},
        input: ''
    }

    beforeEach(() => {
        wrapper = shallow(<SearchItems {...SearchProps}/>)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})