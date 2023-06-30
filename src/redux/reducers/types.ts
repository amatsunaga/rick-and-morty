export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

export type State = {
  characters: Character[];
  filters: { byName: string };
  favoritesIds: number[];
  favoriteCharacters: Character[];
  isLoading: boolean;
  page: { current: number; total: number };
};

export type Action = {
  type: string;
  payload?: any;
};
