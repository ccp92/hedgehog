import DogSelector from ".";
import { mount } from "enzyme";
import React from "react";

describe("DogSelector", () => {
  describe("Example 1", () => {
    it("Renders from api response", () => {
      const apiResponse = {
        data: {
          status: "success",
          message: { affenpischer: [], african: [], airedale: [] }
        }
      };
      const getDogBreedsSpy = { execute: jest.fn(() => apiResponse) };
      const wrapper = mount(<DogSelector getDogBreeds={getDogBreedsSpy} />);
      wrapper.setState({data: apiResponse.data, loading: false});
      expect(getDogBreedsSpy.execute).toHaveBeenCalled();
      expect(wrapper.find('[data-test="dog-breeds"]').length).toEqual(3);
    });
  });

  describe("Example 2", () => {
    it("Renders from api response", () => {
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
      const getDogBreedsSpy = { execute: jest.fn(() => apiResponse) };
      const wrapper = mount(<DogSelector getDogBreeds={getDogBreedsSpy} />);
      wrapper.setState({data: apiResponse.data, loading: false});
      expect(getDogBreedsSpy.execute).toHaveBeenCalled();
      expect(wrapper.find('[data-test="dog-breeds"]').length).toEqual(5);
    });
  });
});
