const INITIAL_STATE = {
  characters: [],
  filters: { byName: "" },
  favoritesIds: localStorage.getItem("favoritos")
    ? JSON.parse(localStorage.getItem("favoritos"))
    : [],
  favoriteCharacters: [],
  isLoading: true,
  page: { current: 1, total: null },
};

export function personagemReducer(state = INITIAL_STATE, action) {
  const newState = { ...state };
  const newfavoritesIds = newState.favoritesIds;
  const newFavoriteCharacters = newState.favoriteCharacters;
  const newPage = newState.page;

  switch (action.type) {
    case "GET_CHARACTERS": {
      return {
        ...state,
        characters: [...action.payload.results],
        isLoading: false,
        page: { ...newPage, total: action.payload.info.pages },
      };
    }

    case "GET_FILTERED": {
      return {
        ...newState,
        characters: action.payload.error
          ? action.payload.filteredCharacters
          : [...action.payload.filteredCharacters.results],
        isLoading: false,
      };
    }

    case "ADD_FILTER": {
      return {
        ...newState,
        filters: { byName: action.payload.byName },
      };
    }

    case "REMOVE_FILTER": {
      return {
        ...newState,
        filters: { byName: "" },
      };
    }

    case "GET_FAVORITES": {
      return {
        ...state,
        favoriteCharacters:
          action.payload.length > 1 ? [...action.payload] : [action.payload],
        isLoading: false,
      };
    }

    case "ADD_FAVORITE": {
      newfavoritesIds.push(action.id);
      localStorage.setItem("favoritos", JSON.stringify(newfavoritesIds));
      return {
        ...newState,
      };
    }

    case "REMOVE_FAVORITE": {
      newfavoritesIds.splice(action.payload.index, 1);
      const editedFavorites = newFavoriteCharacters.filter(
        (object) => object.id !== action.payload.personagemId
      );
      localStorage.setItem("favoritos", JSON.stringify(newfavoritesIds));
      return {
        ...newState,
        favoriteCharacters: editedFavorites,
      };
    }

    case "REMOVE_ALL_FAVORITES": {
      return {
        ...newState,
        favoritesIds: [],
        favoriteCharacters: { byName: "" },
      };
    }

    case "SET_CURRENT_PAGE": {
      return {
        ...newState,
        page: { current: action.payload },
      };
    }

    default: {
      return state;
    }
  }
}
