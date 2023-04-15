import ArithmeticOp from "../keypad/ArithmeticOp";
import Number from "../keypad/Number";

const CalculatorKeypad = () => {
  return (
    <div className="grid grid-cols-4 gap-1">
      <ArithmeticOp symbol="c" />
      <ArithmeticOp symbol="+/-" />
      <ArithmeticOp symbol="%" />
      <ArithmeticOp symbol="/" />
      <Number number="7" />
      <Number number="8" />
      <Number number="9" />
      <ArithmeticOp symbol="x" />
      <Number number="4" />
      <Number number="5" />
      <Number number="6" />
      <ArithmeticOp symbol="-" />
      <Number number="1" />
      <Number number="2" />
      <Number number="3" />
      <ArithmeticOp symbol="+" />
      <Number number="0" className="col-span-2" />
      <Number number="." />
      <ArithmeticOp symbol="=" />
    </div>
  );
};

export default CalculatorKeypad;
