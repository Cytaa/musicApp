import axios from "axios";

let options = {
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "" },
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "ac5b5a35efmshfa5d099508a7f01p154dc2jsnc4a7eb199e48",
  },
};

const sendRequest = async (query: string): Promise<any[]> => {
  options.params.q = query;
  const { data } = await axios.request(options);
  console.log(data);
  return data;
};

sendRequest("eminem");

export default sendRequest;
