import axios from "axios";
// https://api.themoviedb.org/3/tv/popular?api_key=5a8ffe25b0883fc6400dbb93bf2a7179&language=en-US&page=1
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5a8ffe25b0883fc6400dbb93bf2a7179",
    language: "en-US"
  }
});

api.get('movie');

export default api;