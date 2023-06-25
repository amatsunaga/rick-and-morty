const INITIAL_STATE = {
  personagens: [],
  favoritos: [],
};

export function personagemReducer(state = INITIAL_STATE, action) {
  // const newState = { ...state };

  switch (action.type) {
    case "GET_CHARACTERS": {
      return {
        ...state,
        personagens: [...action.payload.results],
      };
    }

    // case "ADD_FAVORITE": {
    //   return newState.favoritos;
    // }

    // case "REMOVE_FAVORITE": {
    //   return { ...newState.favoritos };
    // }

    default: {
      return state;
    }
  }
}
