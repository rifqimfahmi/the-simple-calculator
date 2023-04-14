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
    numberKeypadClicked: (state, action: PayloadAction<string>) => {
      state.activeCalc = `${state.activeCalc}${action.payload}`;
    },
  },
});

export const { numberKeypadClicked } = calculatorSlice.actions;
export default calculatorSlice.reducer;
