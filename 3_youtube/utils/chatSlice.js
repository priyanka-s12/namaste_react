import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHAT_COUNT } from './constants';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      //  state.messages.splice(10, 1); - remove 1 message from top - not working properly
      // state.messages.splice(LIVE_CHAT_COUNT, 1);
      if (state.messages.length >= LIVE_CHAT_COUNT) {
        console.log(state.messages.length);

        state.messages.shift(); // remove oldest message
      }
      state.messages.push(action.payload);
    },
  },
});
export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
