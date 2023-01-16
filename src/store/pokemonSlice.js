import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, next: "", previous: "", results: [] };

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    updatePokemonlist(state, action) {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = [...state.results, ...action.payload.results];
    },
  },
});

export const { updatePokemonlist } = pokemonSlice.actions;
export default pokemonSlice.reducer;
