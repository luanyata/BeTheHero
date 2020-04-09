import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import NewIncidant from "../pages/NewIncident";

describe("<NewIncidant/>", () => {
  it("should to render the <NewIncident /> component", () => {
    const wrapper = mount(
      <MemoryRouter>
        <NewIncidant />
      </MemoryRouter>
    );

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
