import fetch from "isomorphic-fetch";
export default class GetDogBreeds {
  async execute() {
    let rawResponse = await fetch("https://dog.ceo/api/breeds/list/all");
    let response = await rawResponse.json();
    return response;
  }
}
