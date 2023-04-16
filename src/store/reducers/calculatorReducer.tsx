import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CalculatorState {
  activeCalc: string;
  activeSession: string;
}

const initialState: CalculatorState = resetCalculatorState();

function onNumberKeypadClicked(
  state: CalculatorState,
  action: PayloadAction<string>
) {
  let current = state.activeCalc;
  let lastChar = current.charAt(current.length - 1);
  let next: string;
  if (lastChar == "0" && current.length == 1 && action.payload != ".") {
    next = action.payload;
  } else if (lastChar == "." && action.payload == ".") {
    next = current;
  } else {
    next = `${current}${action.payload}`;
  }
  state.activeCalc = next;
}

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    numberKeypadClicked: onNumberKeypadClicked,
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
