import CalculatorActiveSession from "./parts/CalculatorActiveSession";
import CalculatorDisplay from "./parts/CalculatorDisplay";
import CalculatorKeypad from "./parts/CalculatorKeypad";
import CalculatorSessionHistory from "./parts/CalculatorSessionHistory";

const Calculator = () => {
  return (
    <div className="p-3">
      <CalculatorSessionHistory />
      <CalculatorActiveSession />
      <CalculatorDisplay />
      <CalculatorKeypad />
    </div>
  );
};

export default Calculator;
