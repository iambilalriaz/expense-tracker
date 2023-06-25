import { useAppDispatch, useAppSelector } from '@app/hooks';
import { getUserMonthlyBudget } from '@components/Home/homeSlice';
import {
  getLoadingBudget,
  monthlyBudgetSelector,
} from '@components/Home/selectors';
import Spinner from '@components/common/spinner';
import { useEffect } from 'react';
import BudgetData from './BudgetData';
import BudgetForm from './BudgetForm';

const Budget = () => {
  const dispatch = useAppDispatch();
  const loadingBudget = useAppSelector(getLoadingBudget);
  const monthlyBudget = useAppSelector(monthlyBudgetSelector);
  useEffect(() => {
    dispatch(getUserMonthlyBudget());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {loadingBudget ? (
        <Spinner variant='secondary' />
      ) : (
        <>
          {monthlyBudget ? (
            <BudgetData budget={monthlyBudget} />
          ) : (
            <BudgetForm />
          )}
        </>
      )}
    </div>
  );
};

export default Budget;
