import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CalculatorState {
  activeCalc: string;
  activeSession: string;
}

const initialState: CalculatorState = resetCalculatorState();

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    numberKeypadClicked: (state, action: PayloadAction<string>) => {
      state.activeCalc = `${state.activeCalc}${action.payload}`;
    },
  },
});

export function resetCalculatorState(): CalculatorState {
  return {
    activeCalc: "0",
    activeSession: "0",
  };
}

export const { numberKeypadClicked } = calculatorSlice.actions;
export default calculatorSlice.reducer;
