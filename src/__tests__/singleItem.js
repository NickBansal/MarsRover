import React from 'react'
import SingleItem from '../Pages/SingleItem'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import '../setupTest'
import videoSingleData from '../__mocks__/videoSingleData'
import imageSingleData from '../__mocks__/imageSingleData'
import assetData from '../__mocks__/assetData'
import mockAxios from 'axios'

describe('<SingleItem />', () => {
  it('Component matches the snapshot', () => {
    const wrapper = mount(<SingleItem />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Testing for images - componentDidMount', done => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: imageSingleData
      })
    )
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: assetData
      })
    )
    const wrapper = mount(<SingleItem />)

    expect(wrapper.state().loading).toBe(true)
    expect(wrapper.state().assets.length).toBe(0)
    expect(wrapper.state().itemData.length).toBe(0)
    expect(wrapper.find('Loading').exists()).toBe(true)

    setTimeout(() => {
      wrapper.update()

      // STATE
      expect(wrapper.state().loading).toBe(false)
      expect(wrapper.state().assets.length).toBe(2)
      expect(wrapper.state().itemData.length).toBe(1)

      // HTML PAGE ELEMENTS
      expect(wrapper.find('div.hvrbox').exists()).toBe(true)
      expect(wrapper.find('.hvrbox-text').text()).toBe('Mars in ColorMars in ColorCreated: 15 years ago')
      expect(wrapper.find('Loading').exists()).toBe(false)
      done()
    }, 50)
  })

  it('Testing for videos - componentDidMount', done => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: videoSingleData
      })
    )
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: assetData
      })
    )
    const wrapper = mount(<SingleItem />)

    setTimeout(() => {
      wrapper.update()

      // STATE
      expect(wrapper.state().loading).toBe(false)
      expect(wrapper.state().assets.length).toBe(2)
      expect(wrapper.state().itemData.length).toBe(1)

      // HTML PAGE ELEMENTS
      expect(wrapper.find('div.VideoPlayback').exists()).toBe(true)
      expect(wrapper.find('.VideoPlayback h1').text()).toBe('Mars shine')
      expect(wrapper.find('Loading').exists()).toBe(false)
      done()
    }, 50)
  })

  it('If no data is returned error message is given', done => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: []
      })
    )
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: assetData
      })
    )
    const wrapper = mount(<SingleItem />)

    setTimeout(() => {
      wrapper.update()

      // HTML PAGE ELEMENTS
      expect(wrapper.find('.ErrorLoad').text()).toBe('Request failed, please try another search')
      done()
    }, 50)
  })
})
