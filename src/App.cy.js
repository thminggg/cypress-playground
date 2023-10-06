import React from "react";
import App from "./App";
import * as Utils from "./utils";

describe("<App />", () => {
  it("renders", () => {
    cy.stub(Utils, "getToken").returns("Mock token");
    cy.mount(<App />);
  });
});
