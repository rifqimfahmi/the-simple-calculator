import CalculatorActiveSession from "./parts/CalculatorActiveSession";
import CalculatorDisplay from "./parts/CalculatorDisplay";
import CalculatorKeypad from "./parts/CalculatorKeypad";
import CalculatorSessionHistory from "./parts/CalculatorSessionHistory";

const Calculator = () => {
  return (
    <>
      <CalculatorSessionHistory />
      <CalculatorActiveSession />
      <CalculatorDisplay />
      <CalculatorKeypad />
    </>
  );
};

export default Calculator;
