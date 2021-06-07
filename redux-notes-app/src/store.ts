import { createStore } from "redux";
import { reducer } from "./store/notesReducer";

export const store = createStore(reducer);
