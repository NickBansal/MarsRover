import "../setupTest";
import React from "react";
import SearchItems from "../Pages/SearchItems";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import testData from "../__mocks__/testData";

describe("<SearchItems />", () => {
  let wrapper;
  const handleClick = jest.fn();
  const props = {
    path: "",
    handleClick,
    input: "",
    allItems: testData.collection.items
  };
  beforeEach(() => {
    wrapper = shallow(<SearchItems {...props} />);
  });

  it("Should match the page with a snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Should show all the amount of items displayed", () => {
    wrapper.setProps({ input: "image" });
    expect(wrapper.find(".Results p").text()).toBe("Results: 4");
    wrapper.setProps({ input: "video" });
    expect(wrapper.find(".Results p").text()).toBe("Results: 1");
    wrapper.setProps({ input: "audio" });
    expect(wrapper.find(".Results p").text()).toBe("Results: 0");
  });

  it("Should display a message if no items are available", () => {
    wrapper.setProps({ allItems: [], input: "image" });
    expect(wrapper.find(".EnterSearch").text()).toBe(
      "There are no images available for this search"
    );
    wrapper.setProps({ allItems: [], input: "audio" });
    expect(wrapper.find(".EnterSearch").text()).toBe(
      "There is no audio available for this search"
    );
    wrapper.setProps({ allItems: [], input: "video" });
    expect(wrapper.find(".EnterSearch").text()).toBe(
      "There are no videos available for this search"
    );
  });

  it("Should render allItems if items are available", () => {
    wrapper.setProps({ allItems: testData.collection.items, input: "video" });
    expect(wrapper.find("SingleThumbnail").exists()).toBe(false);
  });
});
