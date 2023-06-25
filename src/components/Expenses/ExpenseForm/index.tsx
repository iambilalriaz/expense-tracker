import Input from '@components/common/Input';
import { KeyboardEvent } from 'react';
import { expenseTypes } from '../../Budget/InputsWizard/data';
import { HiPlus } from 'react-icons/hi';
import Button from '@components/common/Button';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import {
  addExpense,
  exitAddingExpense,
  setExpenseAmount,
  setExpenseTitle,
  setExpenseType,
} from '../expenseFormSlice';
import { getExpenseToBeAdded } from '../selectors';

const ExpenseForm = () => {
  const dispatch = useAppDispatch();

  const expenseToBeAdded = useAppSelector(getExpenseToBeAdded);

  const onAddExpense = () => {
    dispatch(addExpense());
  };
  const onPressEnter = (e: KeyboardEvent) => {
    if (e?.key === 'Enter') {
      onAddExpense();
    }
  };

  return (
    <>
      <div className='px-12 min-w-full md:w-[30rem] lg:w-[50rem]'>
        <Input
          type='text'
          id='expense-title'
          value={expenseToBeAdded?.title}
          autoFocus
          placeholder='Enter expense title...'
          onInputChange={(e) => {
            dispatch(setExpenseTitle(e?.target?.value));
          }}
          onPressEnter={onPressEnter}
          inputTextSize='text-xl md:text-2xl'
        />
      </div>
      <div className='px-12 min-w-full md:w-[30rem] lg:w-[50rem] my-12'>
        <label
          htmlFor='expense-type'
          className={`z-0 isolate ${
            expenseToBeAdded?.type
              ? 'top-1 text-sm md:text-lg text-primary'
              : 'top-[34px] md:top-9 text-xl md:text-2xl text-secondary'
          } relative group-focus-within:top-1 group-focus-within:text-sm group-focus-within:md:text-lg group-focus-within:text-primary w-auto`}
        >
          Select expense type...
        </label>
        <select
          value={expenseToBeAdded?.type}
          onChange={(e) => dispatch(setExpenseType(e?.target?.value))}
          className='z-1 cursor-pointer isolate bg-transparent outline-none border-b-2 border-secondary py-2 text-xl md:text-2xl w-full'
        >
          <option disabled value='' />
          {expenseTypes?.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className='px-12 min-w-full md:w-[30rem] lg:w-[50rem]'>
        <Input
          type='number'
          id='expense-amount'
          value={expenseToBeAdded?.amount || ''}
          placeholder='Enter expense amount...'
          onInputChange={(e) => {
            dispatch(setExpenseAmount(+e?.target?.value));
          }}
          onPressEnter={onPressEnter}
          inputTextSize='text-xl md:text-2xl'
        />
      </div>
      <div className='flex justify-center mt-8'>
        <Button
          variant='secondary'
          styles='mt-4'
          onClick={() => dispatch(exitAddingExpense())}
          title='Cancel'
        />
        <Button
          styles='mt-4 ml-12'
          onClick={onAddExpense}
          title='Add'
          Icon={<HiPlus />}
        />
      </div>
    </>
  );
};

export default ExpenseForm;
