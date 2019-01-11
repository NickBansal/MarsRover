import './setupTest';
import React from 'react';
import SingleItem from '../Pages/SingleItem';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import axios from 'axios'

describe('<LandingPage />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<SingleItem />)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('componentDidMount should fetch items and update the state', async () => {
        const renderedComponent = await wrapper
        await renderedComponent.update()
        expect(renderedComponent.state('groceries').length).toEqual(2)
      })
})