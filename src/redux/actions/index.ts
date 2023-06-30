import axios from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Character } from "../reducers/types";

export function getAllCharactersAction(payload: {}) {
  // console.log("payload:", payload);

  return {
    type: "GET_CHARACTERS",
    payload,
  };
}

export function getFilteredCharactersAction(
  filteredCharacters: Character[],
  error: unknown
) {
  return {
    type: "GET_FILTERED",
    payload: { filteredCharacters, error },
  };
}

export function addFilterAction(byName: string) {
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

export function getFavoriteCharactersAction(payload: Character[]) {
  return {
    type: "GET_FAVORITES",
    payload,
  };
}

export function addFavoriteAction(payload: number) {
  return {
    type: "ADD_FAVORITE",
    payload,
  };
}

export function removeFavoriteAction(index: number, personagemId: number) {
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

export function setCurrentPageAction(payload: number) {
  return {
    type: "SET_CURRENT_PAGE",
    payload,
  };
}

export const fetchCharacters = (page: number) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const response = await axios.get(
      // `https://rickandmortyapi.com/api/character/?page=2`
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );

    dispatch(getAllCharactersAction(response.data));
  };
};

export const fetchFiltered = (filters: string) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
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

export const fetchFavorites = (favoritesIds: string) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    if (favoritesIds.length > 0) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${favoritesIds}`
      );

      dispatch(getFavoriteCharactersAction(response.data));
    }
  };
};
