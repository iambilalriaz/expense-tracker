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
      addMonthlyBudget(monthlyIncome, allExpensesBudget).then(
        (monthlyBudget) => {
          console.log(monthlyBudget);
        }
      );
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
        <p
          className={`${
            remainingBalance < 0 ? 'text-error' : 'text-primary'
          } text-center mb-8 md:mb-16 text-4xl`}
        >
          <p className='text-light text-lg'>Remaining Balance: </p>{' '}
          {remainingBalance.toLocaleString()}
        </p>
      ) : (
        <p className='text-light text-2xl pb-4 text-center'>
          Setup Your Monthly Budget Now!
        </p>
      )}
      <div className='min-w-full md:w-[30rem] lg:w-[50rem]'>
        <div className='w-full'>
          <div className='relative z-0 px-2 w-full group text-light'>
            <label
              htmlFor={`${currentInput}`}
              className={`relative ${
                value
                  ? 'top-1 text-sm md:text-lg text-primary'
                  : 'top-[34px] md:top-9 text-xl md:text-2xl text-light'
              } w-auto`}
            >
              {`Enter ${
                currentInputIdx > 0 ? `${placeholder} budget` : placeholder
              }...`}
            </label>
            <input
              className='p-0 outline-none bg-transparent w-full border-b-2 border-primary text-2xl md:text-3xl py-1'
              id={`${currentInput}`}
              type='number'
              autoFocus={true}
              value={value || ''}
              onChange={onInputChange}
              onKeyDown={onPressEnter}
              onBlur={(e) => {
                if (!e.target.value) {
                  e?.target?.previousSibling?.classList?.remove(
                    'top-1',
                    'text-sm'
                  );
                }
              }}
            />
          </div>
          <div className='flex text-4xl justify-between items-center mt-8 text-primary'>
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
              <button
                onClick={submitBudget}
                className='bg-primary text-secondary text-sm rounded-lg px-4 py-2'
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
