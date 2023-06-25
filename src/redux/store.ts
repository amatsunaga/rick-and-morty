import { combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

// Importamos applyMiddleware do Redux, para poder adicionar Thunk ou Saga como Middleware
import { createStore, applyMiddleware } from "redux";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { personagemReducer } from "./reducers/personagemReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  personagem: personagemReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos o hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Aqui vamos aplicar os middlewares
);
