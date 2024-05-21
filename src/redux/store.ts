import { Person } from "@/interfaces";
import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, peopleSlice } from "./states";

export interface AppStore {
  people: Person[];
  favorites: Person[];
}

export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoriteSlice.reducer
    }
})
