import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  input: string;
  filter: string[];
}

interface InitialState {
  filterState: FilterState;
}

const initialState: InitialState = {
  filterState: {
    input: "",
    filter: [],
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setInputFilter: (state, action: PayloadAction<FilterState>) => {
      state.filterState = action.payload;
    },
  },
});

export const { setInputFilter } = filterSlice.actions;

export default filterSlice.reducer;
