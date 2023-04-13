import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./reducers/calculatorReducer";

const calculatorStore = configureStore({
  reducer: {
    one: calculatorReducer,
  },
});

export type CalculatorStoreState = ReturnType<typeof calculatorStore.getState>;
export default calculatorStore;
