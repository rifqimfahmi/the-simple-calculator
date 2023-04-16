import { useSelector } from "react-redux";
import { CalculatorState } from "../../../store/reducers/calculatorReducer";
import { useDispatch } from "react-redux";
import { CalculatorStoreState } from "@/store/calculatorStore";

const CalculatorDisplay = () => {
  const activeDisplay = useSelector(
    (state: CalculatorStoreState) => state.one.displayedNum
  );
  const dispatch = useDispatch();
  return (
    <div>
      <input
        className="w-full text-end"
        type="text"
        value={activeDisplay}
        disabled
      />
    </div>
  );
};

export default CalculatorDisplay;
