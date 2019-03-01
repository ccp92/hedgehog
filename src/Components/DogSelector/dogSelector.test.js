import DogSelector from ".";
import { mount, shallow } from "enzyme";
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

    it("Displays a dog from the api", () => {
      const apiResponse = {
        data: {
          status: "success",
          message: { affenpischer: [], african: [], airedale: [] }
        }
      };
      const imageResponse = {
        image: {
          status: "success",
          message: "https://images.dog.ceo/breeds/pug/n02110958_13930.jpg"
        }
      }
      const getDogBreedsSpy = { execute: jest.fn(() => apiResponse) };
      const getDogPicSpy = { execute: jest.fn(() => imageResponse) };
      const wrapper = mount(<DogSelector getDogBreeds={getDogBreedsSpy} getDogPic={getDogPicSpy} />)
      wrapper.setState({data: apiResponse.data, loading: false});
      wrapper.find('form[data-test="pic-form"]').simulate('submit');
      expect(getDogPicSpy.execute).toHaveBeenCalled();
    })
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

    it("Renders a dog from the api", () => {
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
      const imageResponse = {
        image: {
          status: "success",
          message: "https://images.dog.ceo/breeds/akita/Akina_Inu_in_Riga_1.JPG"
        }
      }
      const getDogBreedsSpy = { execute: jest.fn(() => apiResponse) };
      const getDogPicSpy = { execute: jest.fn(() => imageResponse) };
      const wrapper = mount(<DogSelector getDogBreeds={getDogBreedsSpy} getDogPic={getDogPicSpy} />)
      wrapper.setState({data: apiResponse.data, loading: false});
      wrapper.find('form[data-test="pic-form"]').simulate('submit');
      expect(getDogPicSpy.execute).toHaveBeenCalled();
    });
  });
});
