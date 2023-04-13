import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CalculatorState {
  activeCalc: string;
}

const initialState: CalculatorState = {
  activeCalc: "0",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateDisplay: (state, action: PayloadAction<string>) => {
      state.activeCalc = action.payload;
    },
  },
});

export const { updateDisplay } = calculatorSlice.actions;
export default calculatorSlice.reducer;
