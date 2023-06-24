type Props = {
  name: string;
  amount: number;
  index: number;
};
const BudgetExpenseCard = ({ name, amount, index }: Props) => {
  return (
    <div
      className={`${
        index % 2 == 0 ? 'bg-[#FFD0B0]' : 'bg-[#B4E5C9]'
      } mb-4 text-secondary p-8 rounded-xl flex flex-col justify-center items-center`}
    >
      <p className='text-3xl font-thin'>{name}</p>
      <p className='text-xl mt-4'>
        Rs.{' '}
        <span className='text-secondary text-3xl tracking-wider'>
          {(amount || 2000).toLocaleString()}
        </span>
      </p>
    </div>
  );
};

export default BudgetExpenseCard;
