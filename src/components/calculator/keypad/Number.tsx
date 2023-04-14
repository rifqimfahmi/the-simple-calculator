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
    (state: CalculatorStoreState) => state.one.activeCalc
  );
  const dispatch = useDispatch();

  const onClickNumber = () => {
    dispatch(numberKeypadClicked(number));
  };

  return (
    <>
      <button className={className} onClick={onClickNumber}>
        {number}
      </button>
    </>
  );
};

export default Number;
