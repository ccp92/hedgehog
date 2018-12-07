
import GetDogBreeds from "../GetDogBreeds";
import nock from "nock";

describe("GetDogBreeds", () => {
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
