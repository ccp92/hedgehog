import fetch from "isomorphic-fetch";
export default class GetDogPic {
  async execute(value) {
    let rawResponse = await fetch(`https://dog.ceo/api/breed/${value}/images/random`)
    let response = await rawResponse.json();
    return response;
  }
}
