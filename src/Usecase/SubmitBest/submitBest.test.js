import SubmitBest from "../SubmitBest";
import nock from "nock";

describe("SubmitBest", () => {
  describe("Example 1", () => {
    beforeEach(() => {
      nock("https://jsonplaceholder.typicode.com").post("/posts");
    });
  });

  it("Should respond with a success message", async () => {
    const submitBest = new SubmitBest();
    let response = await submitBest.execute("Poodle");
    expect(response).toEqual({"favourite": "Poodle", "id": 101});
  });

  describe("Example 2", () => {
    beforeEach(() => {
      nock("https://jsonplaceholder.typicode.com").post("/posts");
    });
  });

  it("Should respond with a success message", async () => {
    const submitBest = new SubmitBest();
    let response = await submitBest.execute("Jackapoo");
    expect(response).toEqual({"favourite": "Jackapoo", "id": 101});
  });
});
