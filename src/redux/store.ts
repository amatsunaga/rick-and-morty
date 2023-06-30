import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Importamos applyMiddleware do Redux, para poder adicionar Thunk ou Saga como Middleware
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import thunk from "redux-thunk";
import { personagemReducer } from "./reducers/personagemReducer";

const rootReducer = combineReducers({
  personagem: personagemReducer,
});

// Tipamos o hook useSelector
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

//   composeWithDevTools(applyMiddleware(thunk)) // Aqui vamos aplicar os middlewares
// );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   UnknownAsyncThunkAction
// >

// export type ThunkAction<
//   TReturnType,
//   TState,
//   TExtraThunkArg,
//   TBasicAction extends Action
// > = (
//   dispatch: ThunkDispatch<TState, TExtraThunkArg, TBasicAction>,
//   getState: () => TState,
//   extraArgument: TExtraThunkArg
// ) => TReturnType;
