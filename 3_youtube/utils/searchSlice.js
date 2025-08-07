import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    cachedResults: (state, action) => {
      // state = { ...state, ...action.payload }; not working
      state = Object.assign(state, action.payload);
      // return { ...state, ...action.payload };
      // result form  {"ip": ["iphone", "iphone12"]}
    },
  },
});

export const { cachedResults } = searchSlice.actions;
export default searchSlice.reducer;
