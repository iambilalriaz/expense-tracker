import { ChangeEvent, KeyboardEvent, useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { getRemainingBalance } from './selectors';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import { InputIndex, currentInput } from '../InputsWizard/data';
const BudgetForm = () => {
  const remainingBalance = useAppSelector(getRemainingBalance);
  const [currentInputIdx, setCurrentInputIdx] = useState(0);

  const goBackward = () => {
    if (currentInputIdx > 0) {
      setCurrentInputIdx((prevState) => prevState - 1);
    }
  };
  const goForward = () => {
    console.log({
      currentInputIdx,
      length: Object.keys(currentInput).length,
    });
    if (currentInputIdx + 1 < Object.keys(currentInput)?.length) {
      setCurrentInputIdx((prevState) => prevState + 1);
    } else {
      // alert('Please select a state before');
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

  const onPressEnter = (e: KeyboardEvent) => {
    if (
      e?.key === 'Enter' &&
      (placeholder?.includes('income') ? !!value : true) &&
      value <= remainingBallance
    ) {
      try {
        goForward();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className='w-full grid place-items-center'>
      {currentInputIdx > 0 && (
        <p
          className={`${
            remainingBalance < 0 ? 'text-error' : 'text-primary'
          } text-center mb-16 text-4xl`}
        >
          <p className='text-light text-lg'>Remaining Balance: </p>{' '}
          {remainingBalance.toLocaleString()}
        </p>
      )}
      <div className='w-full md:w-[70%]'>
        <div>
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
          <div className='flex text-4xl justify-between mt-8 text-primary'>
            {currentInputIdx > 0 && (
              <>
                <BsFillArrowLeftCircleFill
                  onClick={goBackward}
                  className='cursor-pointer'
                />
                <BsFillArrowRightCircleFill
                  className='ml-4 cursor-pointer'
                  onClick={goForward}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
