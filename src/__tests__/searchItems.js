import '../setupTest';
import React from 'react'
import SearchItems from '../Pages/SearchItems';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import fakeData from '../__mocks__/testData'


describe('<SearchPage />', () => {

    const SearchProps = {
        allItems: fakeData.collection.items,
        handleClick: () => { },
        input: ''
    }
    const wrapper = shallow(<SearchItems {...SearchProps} />)

    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})