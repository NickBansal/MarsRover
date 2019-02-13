import "../setupTest";
import React from "react";
import LandingPage from "../Pages/LandingPage";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("<LandingPage />", () => {
  it("Should match the page with a snapshot", () => {
    const wrapper = shallow(<LandingPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
