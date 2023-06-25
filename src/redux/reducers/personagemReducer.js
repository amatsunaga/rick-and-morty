const INITIAL_STATE = {
  personagens: [],
  favoritos: [],
};

export function personagemReducer(state = INITIAL_STATE, action) {
  const newState = { ...state };

  switch (action.type) {
    case "GET_CHARACTERS": {
      return {
        ...state,
        personagens: [...action.payload.results],
      };
    }

    case "ADD_FAVORITE": {
      newState.favoritos.push(action.payload);
      return { ...newState };
    }

    case "REMOVE_FAVORITE": {
      newState.favoritos.splice(action.index, 1)
      return { ...newState };
    }

    default: {
      return state;
    }
  }
}
