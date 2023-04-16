import calculatorReducer, {
  CalculatorState,
  numberKeypadClicked,
  resetCalculatorState,
} from "../reducers/calculatorReducer";

describe("calculator reducer numberKeypadClicked test", () => {
  it("should not add 0 if the clicked number is 0 on initialState", () => {
    let state: CalculatorState = resetCalculatorState();
    state = calculatorReducer(state, numberKeypadClicked("0"));
    state = calculatorReducer(state, numberKeypadClicked("0"));

    expect(state.displayedNum).toBe("0");
  });

  it("should add 0 if the current number is not 0", () => {
    let state: CalculatorState = resetCalculatorState();
    state = calculatorReducer(state, numberKeypadClicked("5"));
    state = calculatorReducer(state, numberKeypadClicked("0"));
    state = calculatorReducer(state, numberKeypadClicked("0"));

    expect(state.displayedNum).toBe("500");
  });

  it("should not remove 0 when on type . on initial state", () => {
    let state: CalculatorState = resetCalculatorState();
    state = calculatorReducer(state, numberKeypadClicked("."));
    state = calculatorReducer(state, numberKeypadClicked("5"));

    expect(state.displayedNum).toBe("0.5");
  });

  it("should not add more than one .", () => {
    let state: CalculatorState = resetCalculatorState();
    state = calculatorReducer(state, numberKeypadClicked("2"));
    state = calculatorReducer(state, numberKeypadClicked("3"));
    state = calculatorReducer(state, numberKeypadClicked("."));
    state = calculatorReducer(state, numberKeypadClicked("."));
    state = calculatorReducer(state, numberKeypadClicked("5"));

    expect(state.displayedNum).toBe("23.5");
  });

  it("should replace initial state 0 with the actual number", () => {
    let state: CalculatorState = resetCalculatorState();
    state = calculatorReducer(state, numberKeypadClicked("2"));

    expect(state.displayedNum).toBe("2");
  });

  it("should only has one .", () => {
    let state: CalculatorState = resetCalculatorState();
    state = calculatorReducer(state, numberKeypadClicked("2"));
    state = calculatorReducer(state, numberKeypadClicked("."));
    state = calculatorReducer(state, numberKeypadClicked("5"));
    state = calculatorReducer(state, numberKeypadClicked("."));
    state = calculatorReducer(state, numberKeypadClicked("6"));

    expect(state.displayedNum).toBe("2.56");
  });

  //   it("should not exceed 9 digit", () => {
  //     const state: CalculatorState = resetCalculatorState();
  //     expect(calculatorReducer(state, numberKeypadClicked("")));
  //   });
});
