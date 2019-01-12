import '../setupTest';
import React from 'react';
import SingleItem from '../Pages/SingleItem';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json'
import sinon from 'sinon';

describe.only('<SingleItem />', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(<SingleItem />)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})