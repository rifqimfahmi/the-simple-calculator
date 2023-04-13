interface Props {
  symbol: string;
}

const ArithmeticOp = ({ symbol }: Props) => {
  return (
    <>
      <p>{symbol}</p>
    </>
  );
};

export default ArithmeticOp;
