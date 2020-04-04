import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";

describe("<Login />", () => {
  it("should to render the <Login /> component", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
