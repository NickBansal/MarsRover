import '../setupTest';
import React from 'react'
import SearchPage from '../Pages/SearchPage';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

describe.only('<SearchPage />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<SearchPage />)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('Changes state on click handler', () => {
        wrapper.instance().handleClick('video')
        expect(wrapper.state().input).toBe('video')
        wrapper.instance().handleClick('image')
        expect(wrapper.state().input).toBe('image')
        wrapper.instance().handleClick('audio')
        expect(wrapper.state().input).toBe('audio')
    })
    it('Changes state on handle submit', () => {
        wrapper.instance().handleSubmit('Earth')
        expect(wrapper.state().loading).toBe(true)
        expect(wrapper.state().start).toBe(false)
        expect(wrapper.state().allItems.length).toBe(0)
        expect(wrapper.state().searchTerm).toBe('earth')
        expect(wrapper.state().upper).toBe(false)

        wrapper.instance().handleSubmit('Earth')
        expect(wrapper.state().searchTerm).toBe('EARTH')
        expect(wrapper.state().upper).toBe(true)
    })
})