import { Expense, UserExpense } from '@data-types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addNewExpenses, getUserExpenses } from '@services/queries';

type InitialState = {
  expensesInForm: Expense[];
  expenseToBeAdded: Expense;
  isAddingExpense: boolean;
  userExpenses: UserExpense[];
  isSubmittingExpenses: boolean;
  isLoadingUserExpenses: boolean;
};
const initialState: InitialState = {
  expensesInForm: [],
  expenseToBeAdded: {
    id: '',
    type: '',
    title: '',
    amount: 0,
  },
  isAddingExpense: false,
  userExpenses: [],
  isSubmittingExpenses: false,

  isLoadingUserExpenses: false,
};

export const submitExpenses = createAsyncThunk(
  'submitExpenses',
  async (_, { getState }) => {
    try {
      await addNewExpenses(
        getState()?.expenseFrom?.expensesInForm as Expense[]
      );
    } catch {
      return [];
    }
  }
);
export const getUserAllExpenses = createAsyncThunk(
  'getUserAllExpenses',
  async () => {
    try {
      return await getUserExpenses();
    } catch {
      return [];
    }
  }
);

export const expenseFormSlice = createSlice({
  name: 'expenseForm',
  initialState,
  reducers: {
    setIsAddingExpense: (state, action: PayloadAction<boolean>) => {
      state.isAddingExpense = action.payload;
    },
    setExpenseTitle: (state, action: PayloadAction<string>) => {
      state.expenseToBeAdded.title = action.payload;
    },
    setExpenseType: (state, action: PayloadAction<string>) => {
      state.expenseToBeAdded.type = action.payload;
    },
    setExpenseAmount: (state, action: PayloadAction<number | string>) => {
      state.expenseToBeAdded.amount = action.payload;
    },
    setExpensesInForm: (state, action: PayloadAction<Expense[]>) => {
      state.expensesInForm = action.payload;
    },
    addExpense: (state) => {
      if (
        state.expenseToBeAdded.title &&
        state.expenseToBeAdded.type &&
        state.expenseToBeAdded.amount
      ) {
        state.expensesInForm.push({
          ...state.expenseToBeAdded,
          id: crypto.randomUUID(),
        });
        state.isAddingExpense = false;
        state.expenseToBeAdded.title = '';
        state.expenseToBeAdded.type = '';
        state.expenseToBeAdded.amount = 0;
      }
    },
    removeExpense: (state, action: PayloadAction<string>) => {
      state.expensesInForm = state.expensesInForm.filter(
        (expense) => expense.id !== action.payload
      );
    },
    exitAddingExpense: (state) => {
      state.isAddingExpense = false;
      state.expenseToBeAdded = {
        id: '',
        type: '',
        title: '',
        amount: 0,
      };
    },
  },
  extraReducers(builder) {
    //submitExpenses
    builder.addCase(submitExpenses.pending, (state) => {
      state.isSubmittingExpenses = true;
    });
    builder.addCase(submitExpenses.fulfilled, (state) => {
      state.isSubmittingExpenses = false;
      state.expensesInForm = [];
    });
    builder.addCase(submitExpenses.rejected, (state) => {
      state.isSubmittingExpenses = false;
      state.expensesInForm = [];
    });

    //userExpenses
    builder.addCase(getUserAllExpenses.pending, (state) => {
      state.isLoadingUserExpenses = true;
    });
    builder.addCase(
      getUserAllExpenses.fulfilled,
      (state, action: PayloadAction<UserExpense[]>) => {
        state.isLoadingUserExpenses = false;
        state.userExpenses = action.payload;
      }
    );
    builder.addCase(getUserAllExpenses.rejected, (state) => {
      state.isLoadingUserExpenses = false;
      state.userExpenses = [];
    });
  },
});

export const {
  setIsAddingExpense,
  setExpenseTitle,
  setExpenseType,
  setExpenseAmount,
  setExpensesInForm,
  addExpense,
  removeExpense,
  exitAddingExpense,
} = expenseFormSlice.actions;

export default expenseFormSlice.reducer;
