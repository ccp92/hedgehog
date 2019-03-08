import fetch from "isomorphic-fetch";

export default class SubmitBest {
  execute = async (dog) => {
    const rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ favourite: dog })
    });
    const content = await rawResponse.json();

    return content;
  };
}
