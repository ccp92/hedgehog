export default class DogBreeds {
  async execute() {
    let rawResponse = await fetch("https://dog.ceo/api/breeds/list/all")
    let response = await rawResponse.json();
    return response
  }
}
