import axios from "axios";
import { pokemons } from "../store/pokemon.js";

const API_URL = "https://pokeapi.co/api/v2/";

const getPokemons = () => {
  axios
    .get(API_URL + "pokemon?limit=50&offset=0")
    .then((res) => {
      res.data.results.forEach((x) => {
        axios
          .get(x.url)
          .then((res) => {
            // Store
            pokemons.update((data) => [...data, res.data]);
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
};

export { getPokemons };
