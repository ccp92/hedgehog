import DogSelector from ".";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
import React from "react";

Enzyme.configure({ adapter: new Adapter() });

describe("DogSelector", () => {
  describe("Example 1", () => {
    it("Renders from api response", () => {
      const wrapper = mount(<DogSelector />);
      const apiResponse = {
        data: {
          status: "success",
          message: { affenpischer: [], african: [], airedale: [] }
        }
      };
      wrapper.setState(apiResponse);
      expect(wrapper.find('[data-test="dog-breeds"]').length).toEqual(3);
    });
  });

  describe("Example 2", () => {
    it("Renders from api response", () => {
      const wrapper = mount(<DogSelector />);
      const apiResponse = {
        data: {
          status: "success",
          message: {
            poodle: [],
            chihuahua: [],
            akita: [],
            beagle: [],
            doberman: []
          }
        }
      };
      wrapper.setState(apiResponse);
      expect(wrapper.find('[data-test="dog-breeds"]').length).toEqual(5);
    });
  });
});
