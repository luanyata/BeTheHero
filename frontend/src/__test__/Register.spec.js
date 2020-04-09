import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Register from "../pages/Register";

describe("<Register />", () => {
  it("should to render the <Register /> component", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
