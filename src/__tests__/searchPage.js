import '../setupTest'
import React from 'react'
import SearchPage from '../Pages/SearchPage'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import mockAxios from 'axios'
import testData from '../__mocks__/testData'

describe.only('<SearchPage />', () => {
  it('Component matches the snapshot', () => {
    const wrapper = shallow(<SearchPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('Changes state on click handler', () => {
    const wrapper = shallow(<SearchPage />)
    wrapper.instance().handleClick('video')
    expect(wrapper.state().input).toBe('video')
    wrapper.instance().handleClick('image')
    expect(wrapper.state().input).toBe('image')
    wrapper.instance().handleClick('audio')
    expect(wrapper.state().input).toBe('audio')
  })
  it('Changes state on handle submit', () => {
    const wrapper = shallow(<SearchPage />)
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
  it('Sets the state with api calls in componentDidMount', (done) => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: testData
      })
    )

    const wrapper = shallow(<SearchPage />)
    wrapper.setState({ searchTerm: 'Nasa' })

    setTimeout(() => {
      wrapper.update()

      expect(wrapper.state().loading).toBe(false)
      expect(wrapper.state().searchTerm).toBe('Nasa')
      done()
    }, 50)
  })
})
