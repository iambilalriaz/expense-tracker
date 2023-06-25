type Props = {
  name: string;
  amount: number;
};
const BudgetExpenseCard = ({ name, amount }: Props) => {
  return (
    <div className='mb-4 text-primary p-8 rounded-xl flex flex-col justify-center items-center bg-light'>
      <p className='text-2xl font-semibold'>{name}</p>
      <p className='text-secondary font-bold text-xl mt-4'>
        Rs.{' '}
        <span className='text-4xl tracking-wider'>
          {amount.toLocaleString()}
        </span>
      </p>
    </div>
  );
};

export default BudgetExpenseCard;
