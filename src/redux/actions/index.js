import axios from "axios";

export function getAllCharactersAction(payload) {
  // console.log("payload:", payload);

  return {
    type: "GET_CHARACTERS",
    payload,
  };
}

export function getFilteredCharactersAction(filteredCharacters, error) {
  return {
    type: "GET_FILTERED",
    payload: { filteredCharacters, error },
  };
}

export function addFilterAction(byName) {
  return {
    type: "ADD_FILTER",
    payload: { byName },
  };
}

export function removeFilterAction() {
  return {
    type: "REMOVE_FILTER",
  };
}

export function getFavoriteCharactersAction(payload) {
  return {
    type: "GET_FAVORITES",
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

export function removeAllFavoritesAction() {
  return {
    type: "REMOVE_ALL_FAVORITES",
  };
}

export function setCurrentPageAction(payload) {
  return {
    type: "SET_CURRENT_PAGE",
    payload,
  };
}

export const fetchCharacters = (page) => {
  return async (dispatch) => {
    const response = await axios.get(
      // `https://rickandmortyapi.com/api/character/?page=2`
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );

    dispatch(getAllCharactersAction(response.data));
  };
};

export const fetchFiltered = (filters) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${filters}`
      );

      dispatch(getFilteredCharactersAction(response.data, null));
    } catch (err) {
      dispatch(getFilteredCharactersAction([], err));
    }
  };
};

export const fetchFavorites = (favoritesIds) => {
  return async (dispatch) => {
    if (favoritesIds.length > 0) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${favoritesIds}`
      );

      dispatch(getFavoriteCharactersAction(response.data));
    }
  };
};
