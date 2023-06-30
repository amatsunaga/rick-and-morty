import { Action, State } from "./types";

const INITIAL_STATE: State = {
  characters: [],
  filter: "",
  favoritesIds: localStorage.getItem("favoritos")
    ? JSON.parse(localStorage.getItem("favoritos") || "")
    : [],
  favoriteCharacters: [],
  isLoading: true,
  currentPage: 1,
  pagesTotal: 1,
};

export function personagemReducer(state = INITIAL_STATE, action: Action) {
  const newState = { ...state };
  const newfavoritesIds = newState.favoritesIds;
  const newFavoriteCharacters = newState.favoriteCharacters;

  switch (action.type) {
    case "GET_CHARACTERS": {
      // window.location.href = `/personagens/${newState.page.current}` ;

      return {
        ...state,
        characters: [...action.payload.results],
        isLoading: false,
        pagesTotal: action.payload.info.pages,
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
        filter: action.payload.byName,
      };
    }

    case "REMOVE_FILTER": {
      return {
        ...newState,
        filter: "",
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
      newfavoritesIds.push(action.payload);
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
      localStorage.removeItem("favoritos");

      return {
        ...state,
        favoritesIds: [],
        favoriteCharacters: [],
      };
    }

    case "SET_CURRENT_PAGE": {
      return {
        ...newState,
        currentPage: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
