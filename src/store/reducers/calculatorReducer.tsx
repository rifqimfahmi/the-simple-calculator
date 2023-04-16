import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum OpEnum {
  MODULUS = "%",
  DIVIDE = "/",
  MULTIPLY = "*",
  SUBSTRACT = "-",
  ADD = "+",
}

export enum ModifierEnum {
  CLEAR = "c",
  EQUAL = "=",
  TOGGLE_NEGATIVE = "+/-",
}

export interface CalculatorState {
  displayedNum: string;
  currentCalc?: string;
  currentCalcOp?: OpEnum;
  activeSession: string;
}

const initialState: CalculatorState = resetCalculatorState();

function onNumberKeypadClicked(
  state: CalculatorState,
  action: PayloadAction<string>
) {
  let current = state.displayedNum;
  let lastChar = current.charAt(current.length - 1);
  let payload = action.payload;
  let next: string;
  if (state.currentCalcOp) {
    next = payload;
  } else if (lastChar == "0" && current.length == 1 && payload != ".") {
    next = payload;
  } else if (lastChar == "." && payload == ".") {
    next = current;
  } else if (payload == "." && current.includes(".")) {
    next = current;
  } else {
    next = `${current}${payload}`;
  }
  state.displayedNum = next;
}

function onArithmeticOpClicked(
  state: CalculatorState,
  action: PayloadAction<OpEnum>
) {
  let payload = action.payload;
  let displayedNumber = StateUtil.getDisplayedNumber(state);
  if (StateUtil.hasPendingOp(state)) {
    state.displayedNum;
  } else {
    state.displayedNum = `${state.displayedNum}${payload}`;
  }
  if (payload == OpEnum.ADD) {
    state.currentCalc = displayedNumber;
    state.currentCalcOp = payload;
  }
}

function onModifierClicked(
  state: CalculatorState,
  action: PayloadAction<ModifierEnum>
): CalculatorState | undefined {
  let payload = action.payload;
  if (payload == ModifierEnum.CLEAR) {
    return resetCalculatorState();
  }
}

const StateUtil = {
  getDisplayedNumber: (state: CalculatorState): string => {
    if (state.currentCalcOp) {
      return state.displayedNum.substring(0, state.displayedNum.length - 2);
    } else {
      return state.displayedNum;
    }
  },
  hasPendingOp: (state: CalculatorState): boolean => {
    return state.currentCalcOp != undefined;
  },
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    numberKeypadClicked: onNumberKeypadClicked,
    arithmeticOpClicked: onArithmeticOpClicked,
    modifierClicked: onModifierClicked,
  },
});

export function resetCalculatorState(): CalculatorState {
  return {
    displayedNum: "0",
    activeSession: "0",
  };
}

export const { numberKeypadClicked, arithmeticOpClicked, modifierClicked } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
