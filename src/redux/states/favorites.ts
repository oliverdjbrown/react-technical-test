import { LocalStorageTypes } from "@/enums";
import { Person } from "@/interfaces";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoriteSlice = createSlice({
  name: LocalStorageTypes.FAVORITES,
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,

  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);

      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      );

      setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);

      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
