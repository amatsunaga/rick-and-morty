const INITIAL_STATE = {
  personagens: [],
  favoriteIds: localStorage.getItem("favoritos")
    ? JSON.parse(localStorage.getItem("favoritos"))
    : [],
  favoriteCharacters: [],
};

export function personagemReducer(state = INITIAL_STATE, action) {
  const newState = { ...state };
  const newFavoriteIds = newState.favoriteIds;
  const newFavoriteCharacters = newState.favoriteCharacters;

  switch (action.type) {
    case "GET_CHARACTERS": {
      return {
        ...state,
        personagens: [...action.payload.results],
      };
    }

    case "GET_FAVORITE": {
      return {
        ...state,
        favoriteCharacters: action.payload,
        // action.payload.length > 1 ? [...action.payload] : action.payload,
      };
    }

    case "ADD_FAVORITE": {
      newFavoriteIds.push(action.id);
      localStorage.setItem("favoritos", JSON.stringify(newFavoriteIds));
      return {
        ...newState,
      };
    }

    case "REMOVE_FAVORITE": {
      newFavoriteIds.splice(action.payload.index, 1);
      const editedFavorites = newFavoriteCharacters.filter(
        (object) => object.id !== action.payload.personagemId
      );
      localStorage.setItem("favoritos", JSON.stringify(newFavoriteIds));
      return {
        ...newState,
        favoriteCharacters: editedFavorites,
      };
    }

    default: {
      return state;
    }
  }
}
