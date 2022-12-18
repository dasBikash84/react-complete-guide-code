import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  showCounter: true,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
  increase(amount) {
    this.count += amount || 0;
  },
  toggleCounter() {
    this.showCounter = !this.showCounter;
  },
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.increment();
    },
    decrement(state) {
      state.decrement();
    },
    increase(state, action) {
      state.increase(action.payload.amount);
    },
    toggleCounter(state) {
      state.toggleCounter();
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
