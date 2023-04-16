import {
  OpEnum,
  arithmeticOpClicked,
} from "@/store/reducers/calculatorReducer";
import { useDispatch } from "react-redux";

interface Props {
  symbol: string;
  op: OpEnum;
  className?: string;
}

const ArithmeticOp = ({ symbol, op, className }: Props) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(arithmeticOpClicked(op));
  };
  return (
    <>
      <button className={`${className} bg-cyan-900 p-3`} onClick={onClick}>
        {symbol}
      </button>
    </>
  );
};

export default ArithmeticOp;
