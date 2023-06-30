import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


