import axios from "axios";

export function getAllCharactersAction(payload) {
  return {
    type: "GET_CHARACTERS",
    payload,
  };
}

export function getFavoriteCharactersAction(payload) {
  return {
    type: "GET_FAVORITE",
    payload,
  };
}

export function addFavoriteAction(id) {
  return {
    type: "ADD_FAVORITE",
    id,
  };
}

export function removeFavoriteAction(index, personagemId) {
  return {
    type: "REMOVE_FAVORITE",
    payload: { index, personagemId },
  };
}

export const fetchCharacters = (page) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );

    dispatch(getAllCharactersAction(response.data));
  };
};

export const fetchFavorite = (favorite) => {
  return async (dispatch) => {
    if (favorite.length > 0) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${favorite}`
      );

      dispatch(getFavoriteCharactersAction(response.data));
    }
  };
};
