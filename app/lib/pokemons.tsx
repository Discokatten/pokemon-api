import { Pokemon, PokeResponse } from "./interfaces";

export async function fetchAllPokemons() {
  // fetch 5 pokemons from pokeapi, starting at 0
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`;
  try {
    const response = await fetch(endpoint);
    const data: PokeResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error(
      `Failed to fetch characters: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

export async function fetchSinglePokemon(endpoint: string) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    // get detsired data
    const {
      sprites: {
        other: {
          "official-artwork": { front_default: img },
        },
      },
      name,
      //   renaming id to order, for later sorting
      id: order,
    } = data;
    // creates new object with desired data
    const pokemon: Pokemon = {
      img,
      name,
      order,
    };

    // checks if we get an image as response TODO: make custom notFound-page
    if (!pokemon.img) {
      // return notFound()
    }

    return pokemon;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error(
      `Failed to fetch characters: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
