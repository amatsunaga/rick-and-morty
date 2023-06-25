const INITIAL_STATE = {
  personagens: [],
  favoritos: localStorage.getItem("favoritos")
    ? JSON.parse(localStorage.getItem("favoritos"))
    : [],
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
      console.log(newState.favoritos);
      newState.favoritos.push(action.id);
      localStorage.setItem("favoritos", JSON.stringify(newState.favoritos));
      return { ...newState };
    }

    case "REMOVE_FAVORITE": {
      newState.favoritos.splice(action.index, 1);
      localStorage.setItem("favoritos", JSON.stringify(newState.favoritos));
      return { ...newState };
    }

    default: {
      return state;
    }
  }
}
