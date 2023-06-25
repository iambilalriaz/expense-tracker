import { ExpenseBudget, MonthlyBudget } from '@data-types';
import BudgetExpenseCard from './BudgetExpenseCard';
import { convertCamelCaseToTitleCase } from '@utils';
import { motion } from 'framer-motion';
const BudgetData = ({ budget }: { budget: MonthlyBudget }) => {
  return (
    <div className='h-screen overflow-y-auto py-12'>
      <div className='my-12 text-center text-secondary'>
        <p className='text-xl'>Budget Month</p>
        <p className='font-semibold text-4xl'>
          {budget?.month}, {budget?.year}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 2, stiffness: 120 },
        }}
        className='block md:grid sm:grid-cols-2 md:grid-cols-3 gap-x-4'
      >
        {Object.entries(budget?.expenseBudget as ExpenseBudget)?.map(
          ([key, value]) => (
            <BudgetExpenseCard
              key={key}
              name={convertCamelCaseToTitleCase(key)}
              amount={value as number}
            />
          )
        )}
      </motion.div>
    </div>
  );
};

export default BudgetData;
