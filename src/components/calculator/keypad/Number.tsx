import { CalculatorStoreState } from "@/store/calculatorStore";
import { numberKeypadClicked } from "@/store/reducers/calculatorReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface Props {
  number: string;
  className?: string;
}

const Number = ({ number, className }: Props) => {
  const activeDisplay = useSelector(
    (state: CalculatorStoreState) => state.one.displayedNum
  );
  const dispatch = useDispatch();

  const onClickNumber = () => {
    dispatch(numberKeypadClicked(number));
  };

  return (
    <>
      <button className={`${className} bg-cyan-800 p-3`} onClick={onClickNumber}>
        {number}
      </button>
    </>
  );
};

export default Number;
