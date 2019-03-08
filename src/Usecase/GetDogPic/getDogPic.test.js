import GetDogPic from "../GetDogPic";
import nock from "nock";

describe("GetDogPic", () => {
  describe("Example 1", () => {
    let data;
    let breed = "pug"
    beforeEach(() => {
      data = {
        status: "success",
        message: `https://images.dog.ceo/breeds/${breed}/n02110958_13930.jpg`
      };
      nock("https://dog.ceo")
        .get(`/api/breed/${breed}/images/random`)
        .reply(200, data);
    });

    it("Should respond with a list of dogs", async () => {
      const getDogPic = new GetDogPic();
      let response = await getDogPic.execute(breed);
      expect(response).toEqual(data);
    });
  });

  describe("Example 2", () => {
    let data;
    let breed = "akita"
    beforeEach(() => {
      data = {
        status: "success",
        message: `"https://images.dog.ceo/breeds/${breed}/Akina_Inu_in_Riga_1.JPG"`
      };
      nock("https://dog.ceo")
        .get(`/api/breed/${breed}/images/random`)
        .reply(200, data);
    });

    it("Should respond with a list of dogs", async () => {
      const getDogPic = new GetDogPic();
      let response = await getDogPic.execute(breed);
      expect(response).toEqual(data);
    });
  });
});
