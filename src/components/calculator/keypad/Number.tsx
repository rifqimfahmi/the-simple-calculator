interface Props {
  number: string;
  className?: string;
}

const Number = ({ number, className }: Props) => {
  return (
    <>
      <p className={className}>{number}</p>
    </>
  );
};

export default Number;
