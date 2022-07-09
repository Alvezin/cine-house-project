import axios from "axios";

const makeFetch = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

const clientDB = axios.create({
  baseURL: "http://localhost:3000",
});

const useWarezcdn = axios.create({
  baseURL: "https://embed.warezcdn.com/filme/",
});
export { clientDB, makeFetch, useWarezcdn };
