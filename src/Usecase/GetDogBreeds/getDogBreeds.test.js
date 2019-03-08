import GetDogBreeds from "../GetDogBreeds";
import nock from "nock";

describe("GetDogBreeds", () => {
  describe("Example 1", () => {
    let data;
    beforeEach(() => {
      data = {
        status: "success",
        message: { affenpischer: [], african: [], airedale: [] }
      };
      nock("https://dog.ceo")
        .get("/api/breeds/list/all")
        .reply(200, data);
    });

    it("Should respond with a list of dogs", async () => {
      const getDogBreeds = new GetDogBreeds();
      let response = await getDogBreeds.execute();
      expect(response).toEqual(data);
    });
  });

  describe("Example 2", () => {
    let data;
    beforeEach(() => {
      data = {
        status: "success",
        message: { poodle: [], jack_russell: [], cockapoo: [], shitzu: [] }
      };
      nock("https://dog.ceo")
        .get("/api/breeds/list/all")
        .reply(200, data);
    });

    it("Should respond with a list of dogs", async () => {
      const getDogBreeds = new GetDogBreeds();
      let response = await getDogBreeds.execute();
      expect(response).toEqual(data);
    });
  });
});
