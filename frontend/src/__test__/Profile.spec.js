import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Profile from "../pages/Profile";

describe("<Profile />", () => {
  it("should to render the <Profile /> component", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
