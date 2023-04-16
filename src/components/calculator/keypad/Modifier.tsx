import {
  ModifierEnum,
  modifierClicked,
} from "@/store/reducers/calculatorReducer";
import { useDispatch } from "react-redux";

interface Props {
  symbol: string;
  modifier: ModifierEnum;
  className?: string;
}

const Modifier = ({ symbol, modifier, className }: Props) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(modifierClicked(modifier));
  };
  return (
    <>
      <button className={`${className} bg-cyan-900 p-3`} onClick={onClick}>
        {symbol}
      </button>
    </>
  );
};

export default Modifier;
