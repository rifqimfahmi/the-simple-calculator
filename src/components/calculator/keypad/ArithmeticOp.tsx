interface Props {
  symbol: string;
  className?: string;
}

const ArithmeticOp = ({ symbol, className }: Props) => {
  return (
    <>
      <button className={`${className} bg-cyan-900 p-3`}>{symbol}</button>
    </>
  );
};

export default ArithmeticOp;
