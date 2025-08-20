export interface PokeResponse {
  count: string;
  next: string;
  previous: string;
  results: PokeUrl[];
}
export interface PokeUrl {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  img: string;
  order: string;
}
