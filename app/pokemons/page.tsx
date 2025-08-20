// import Card from "../components/card";
import Image from "next/image";
import Link from "next/link";
import { fetchAllPokemons, fetchSinglePokemon } from "../lib/pokemons";

export default async function PokemonPage() {
    // waiting for pokemons
  const { results } = await fetchAllPokemons();

  return (
    <ul className="text-amber-100 grid gap-4 grid-cols-[repeat(auto-fit,minmax(30ch,1fr))]">
     {/* TODO: Make first char uppercase */}
     {/* takes pokemons from result, maps name and sends to fetch single pokemon */}
      {await Promise.all(
        results.map(async (results) => {
          const endpoint = `https://pokeapi.co/api/v2/pokemon/${results.name}`;
          const pokemon = await fetchSinglePokemon(endpoint);
          return (
            <li key={pokemon.order}>
                {/* TODO: Make dynamic rout for single pokemons */}
              <Link href={`/${pokemon.order}`}>
                <Image
                  src={pokemon.img}
                  alt={pokemon.name}
                  width={200}
                  height={300}
                />
                {pokemon.name}
              </Link>
            </li>
          );
        })
      )}
    </ul>
  );
}
