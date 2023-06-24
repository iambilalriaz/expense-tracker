import { ExpenseBudget, MonthlyBudget } from '@data-types';
import BudgetExpenseCard from './BudgetExpenseCard';
import { convertCamelCaseToTitleCase } from '@utils';
import { motion } from 'framer-motion';
const BudgetData = ({ budget }: { budget: MonthlyBudget }) => {
  return (
    <div className='w-screen mt-12 h-screen overflow-y-auto p-4'>
      <h2 className='text-light text-3xl text-center my-4'>
        Budget for {budget?.month}, {budget?.year}
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 2, stiffness: 120 },
        }}
        className='block md:grid sm:grid-cols-2 md:grid-cols-3 gap-x-4'
      >
        {Object.entries(budget?.expenseBudget as ExpenseBudget)?.map(
          ([key, value], idx) => (
            <BudgetExpenseCard
              key={key}
              index={idx}
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
