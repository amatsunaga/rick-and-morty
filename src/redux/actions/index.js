import axios from "axios";

export function getAllCharactersAction(payload) {
  return {
    type: "GET_CHARACTERS",
    payload,
  };
}

export function addFavoriteAction(id) {
  return {
    type: "ADD_FAVORITE",
    id,
  };
}

export function removeFavoriteAction(index) {
  return {
    type: "REMOVE_FAVORITE",
    index
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
