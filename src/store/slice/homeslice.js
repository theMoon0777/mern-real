import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  insights: [],
  compares: {},
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setInsight: (state, action) => {
      state.insights = action.payload;
    },
    setCompare: (state, action) => {
        state.compares = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setValue, setInsight, setCompare } = homeSlice.actions;

export default homeSlice.reducer;
