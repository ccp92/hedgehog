import SubmitBestDog from ".";
import { mount } from "enzyme";
import React from "react";

describe("SubmitBestDog", () => {
  describe("Example 1", () => {
    const response = { favourite: "dog", id: 101 };
    const submitBestSpy = { execute: jest.fn(() => response) };
    const wrapper = mount(<SubmitBestDog submitBest={submitBestSpy} />);
    it("Renders the form", () => {
      expect(wrapper.find('form[data-test="best-dog-form"]').length).toEqual(1);

      expect(wrapper.find('button[data-test="submit-button"]').length).toEqual(
        1
      );
      expect(wrapper.find('input[data-test="input"]').length).toEqual(1);
    });

    it("Calls the submit usecase", () => {
      wrapper.setState({value: "dog"})
      wrapper.find('form[data-test="best-dog-form"]').simulate("submit");

      expect(submitBestSpy.execute).toHaveBeenCalledWith("dog");
    });
  });

  describe("Example 2", () => {
    const response = { favourite: "cat!?", id: 101 };
    const submitBestSpy = { execute: jest.fn(() => response) };
    const wrapper = mount(<SubmitBestDog submitBest={submitBestSpy} />);
    it("Renders the form", () => {
      expect(wrapper.find('form[data-test="best-dog-form"]').length).toEqual(1);

      expect(wrapper.find('button[data-test="submit-button"]').length).toEqual(
        1
      );
    });

    it("Calls the submit usecase", () => {
      wrapper.setState({value: "cat!?"})
      wrapper.find('form[data-test="best-dog-form"]').simulate("submit");

      expect(submitBestSpy.execute).toHaveBeenCalledWith("cat!?");
    });
  });
});
