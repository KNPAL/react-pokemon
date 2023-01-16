import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, next: "", previous: "", results: [], ids: [],plist:[],pNames:[] };

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    updatePokemonlist(state, action) {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      action.payload.results.forEach((element) => {
        if (
          state.ids.indexOf(
            element.url.substring(
              element.url.lastIndexOf("/") - 2,
              element.url.lastIndexOf("/")
            )
          ) < 0
        ) {
          state.ids.push(
            element.url.substring(
              element.url.lastIndexOf("/") - 2,
              element.url.lastIndexOf("/")
            )
          );
          state.results.push(element);
        }
      });
    },

    addPokemon(state,action){
      if(state.pNames.indexOf(action.payload.name)<0){
        state.pNames.push(action.payload.name);
        state.plist.push(action.payload)
      }
    }

  },
});

export const pokemonSliceAction = pokemonSlice.actions;
export default pokemonSlice.reducer;
