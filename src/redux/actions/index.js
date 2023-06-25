import axios from "axios";

export function getAllCharactersAction(payload) {
  return {
    type: "GET_CHARACTERS",
    payload: payload,
  };
}

// export function addFavorite(payload) {
//   return {
//     type: "ADD_FAVORITE",
//     payload,
//   };
// }

// export function removeFavorite(payload) {
//   return {
//     type: "REMOVE_FAVORITE",
//     payload: payload,
//   };
// }

export const fetchCharacters = (page) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );

    dispatch(getAllCharactersAction(response.data));
  };
};
