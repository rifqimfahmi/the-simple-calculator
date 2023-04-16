import { ModifierEnum, OpEnum } from "@/store/reducers/calculatorReducer";
import ArithmeticOp from "../keypad/ArithmeticOp";
import Number from "../keypad/Number";
import Modifier from "../keypad/Modifier";

const CalculatorKeypad = () => {
  return (
    <div className="grid grid-cols-4 gap-1">
      <Modifier symbol="c" modifier={ModifierEnum.CLEAR} />
      <Modifier symbol="+/-" modifier={ModifierEnum.TOGGLE_NEGATIVE} />
      <ArithmeticOp symbol="%" op={OpEnum.MODULUS} />
      <ArithmeticOp symbol="/" op={OpEnum.DIVIDE} />
      <Number number="7" />
      <Number number="8" />
      <Number number="9" />
      <ArithmeticOp symbol="x" op={OpEnum.MULTIPLY} />
      <Number number="4" />
      <Number number="5" />
      <Number number="6" />
      <ArithmeticOp symbol="-" op={OpEnum.SUBSTRACT} />
      <Number number="1" />
      <Number number="2" />
      <Number number="3" />
      <ArithmeticOp symbol="+" op={OpEnum.ADD} />
      <Number number="0" className="col-span-2" />
      <Number number="." />
      <Modifier symbol="=" modifier={ModifierEnum.EQUAL} />
    </div>
  );
};

export default CalculatorKeypad;
