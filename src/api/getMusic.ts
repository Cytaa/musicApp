import axios from "axios";
import MusicResponse from "../models/Music";
import ApiResponse from "../models/ApiResponse";
import secret from "./secret.json";
let options = {
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "" },
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": secret.key,
  },
};

const getMusic = async (query: string): Promise<Array<MusicResponse>> => {
  options.params.q = query;
  const {
    data: { data: innerData },
  }: ApiResponse = await axios.request(options);

  return innerData;
};

export default getMusic;
