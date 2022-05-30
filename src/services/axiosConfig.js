import axios from "axios";

const makeFetch = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

export default makeFetch;
