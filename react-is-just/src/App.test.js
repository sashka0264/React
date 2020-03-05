import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import {createSerializer} from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({mode: "deep"}));

describe("App", () => {
  const mockinitializeAppTC = jest.fn(); // создание мока для функции 'mockinitializeAppTC'

  const props = {
    initializeAppTC: mockinitializeAppTC,
    initialized: false
  };

  it("dispatches the 'initializeAppTC()' method it receives from props", () => {
    const AppShallow = shallow(<App {...props} />);
    expect(mockinitializeAppTC).toHaveBeenCalledTimes(1);
    expect(AppShallow).toMatchSnapshot();
  });
});