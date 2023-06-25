import { ChangeEvent, KeyboardEvent, useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import {
  getAllExpensesBudget,
  getMonthlyIncome,
  getRemainingBalance,
} from './selectors';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { InputIndex, currentInput } from '../InputsWizard/data';
import '../index.css';
import { addMonthlyBudget } from '@services/queries';
import { getUserMonthlyBudget } from '../../Home/homeSlice';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
const BudgetForm = () => {
  const remainingBalance = useAppSelector(getRemainingBalance);
  const monthlyIncome = useAppSelector(getMonthlyIncome);
  const allExpensesBudget = useAppSelector(getAllExpensesBudget);
  const [currentInputIdx, setCurrentInputIdx] = useState(0);

  const goBackward = () => {
    if (currentInputIdx > 0) {
      setCurrentInputIdx((prevState) => prevState - 1);
    }
  };
  const goForward = () => {
    if (currentInputIdx + 1 < Object.keys(currentInput)?.length) {
      setCurrentInputIdx((prevState) => prevState + 1);
    } else {
      submitBudget();
    }
  };

  const dispatch = useAppDispatch();
  const remainingBallance = useAppSelector(getRemainingBalance);

  const { placeholder, getterFn, setterFn } =
    currentInput[currentInputIdx as InputIndex];
  const value = +useAppSelector(getterFn);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setterFn(+e?.target?.value));
  };

  const submitBudget = () => {
    if (remainingBalance === 0) {
      addMonthlyBudget(monthlyIncome, allExpensesBudget).then(() => {
        dispatch(getUserMonthlyBudget());
      });
    }
  };
  const onPressEnter = (e: KeyboardEvent) => {
    if (
      e?.key === 'Enter' &&
      (placeholder?.includes('income') ? !!value : true) &&
      remainingBallance >= 0
    ) {
      try {
        goForward();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className='py-24  px-12 w-full budget-message'>
      {currentInputIdx > 0 ? (
        <div
          className={`${
            remainingBalance < 0 ? 'text-error' : 'text-primary'
          } text-center mb-8 md:mb-16 text-4xl md:text-6xl`}
        >
          <p className='text-secondary text-lg'>Remaining Balance: </p>{' '}
          {remainingBalance.toLocaleString()}
        </div>
      ) : (
        <p className='text-secondary text-2xl pb-4 text-center'>
          Setup Your Monthly Budget Now!
        </p>
      )}
      <div className='min-w-full md:w-[30rem] lg:w-[50rem]'>
        <div className='w-full'>
          <Input
            id={`budget-input-${currentInputIdx}`}
            type='text'
            onInputChange={onInputChange}
            onPressEnter={onPressEnter}
            value={value}
            placeholder={`Enter ${
              currentInputIdx > 0 ? `${placeholder} budget` : placeholder
            }...`}
          />
          <div className='flex text-4xl justify-between items-center mt-8 text-secondary'>
            {currentInputIdx > 0 && (
              <>
                <BsFillArrowLeftCircleFill
                  onClick={goBackward}
                  className='cursor-pointer'
                />
                <p className='text-base'>
                  {currentInputIdx} / {Object.keys(currentInput)?.length - 1}
                </p>
                <BsFillArrowRightCircleFill
                  className={`cursor-pointer ${
                    currentInputIdx < Object.keys(currentInput)?.length - 1
                      ? 'visible'
                      : 'invisible'
                  }`}
                  onClick={goForward}
                />
              </>
            )}
          </div>
          {currentInputIdx === Object.keys(currentInput)?.length - 1 && (
            <div className='mt-12 flex justify-center items-center'>
              <Button styles='mx-auto' title='Submit' onClick={submitBudget} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
