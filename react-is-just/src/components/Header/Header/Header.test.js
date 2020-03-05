import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import {createSerializer} from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({mode: "deep"}));

describe("Header", () => {
    const props = {
        isAuth: true,
        login: "sasha2020",
        logoutTC: () => {}
    };

    it("The user is authorized", () => {
        const HeaderShallow = shallow(<Header {...props} />);
        expect(HeaderShallow).toMatchSnapshot();
    });

    it("The user isn't authorized", () => {
        const nextProps = {...props, isAuth: false};
        const HeaderShallow = shallow(<Header {...nextProps} />);
        expect(HeaderShallow).toMatchSnapshot();
    });
});