import { LiaTimesSolid } from 'react-icons/lia';
import { expenseTypes } from '@components/Budget/InputsWizard/data';
import { Expense } from '@data-types';
import { useAppDispatch } from '@app/hooks';
import { removeExpense } from '../expenseFormSlice';

const ExpenseCard = ({ expense }: { expense: Expense }) => {
  const dispatch = useAppDispatch();

  const onRemoveExpense = (expenseId: string) => {
    dispatch(removeExpense(expenseId));
  };
  return (
    <div className='mb-4 flex justify-between items-end border-secondary border-2 p-4 rounded-lg relative w-full'>
      <div>
        <p className='font-medium text-lg md:text-2xl mb-2'>{expense?.title}</p>
        <span className='text-light py-1 px-2 rounded-full text-xs md:text-sm bg-primary'>
          {
            expenseTypes?.find((expType) => expType?.value === expense?.type)
              ?.label
          }
        </span>
      </div>
      <p className='font-semibold text-2xl md:text-3xl'>Rs.{expense?.amount}</p>
      <LiaTimesSolid
        className='text-secondary absolute top-2 right-2 cursor-pointer'
        onClick={onRemoveExpense.bind(this, expense?.id)}
      />
    </div>
  );
};

export default ExpenseCard;
