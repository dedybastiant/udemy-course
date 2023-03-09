import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterInitialState = { counter: 0, showCounter: false };
const authInitialState = { isAuth: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      console.log("sss");
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      console.log("s");
      state.isAuth = true;
    },
    logout(state) {
      console.log("s1");
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;

export default store;
