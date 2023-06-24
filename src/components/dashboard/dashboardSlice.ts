import { MonthlyBudget } from '@data-types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentMonthBudget } from '@services/queries';

type InitialState = {
  loadingBudget: boolean;
  monthlyBudget: MonthlyBudget;
};
const initialState: InitialState = {
  monthlyBudget: null,
  loadingBudget: false,
};

export const getUserMonthlyBudget = createAsyncThunk(
  'getMonthlyBudget',
  async () => {
    try {
      const monthlyBudget = await getCurrentMonthBudget();
      return monthlyBudget;
    } catch {
      return null;
    }
  }
);
export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserMonthlyBudget.pending, (state) => {
      state.loadingBudget = true;
    });
    builder.addCase(
      getUserMonthlyBudget.fulfilled,
      (state, action: PayloadAction<MonthlyBudget>) => {
        state.loadingBudget = false;
        state.monthlyBudget = action.payload;
      }
    );
    builder.addCase(getUserMonthlyBudget.rejected, (state) => {
      state.loadingBudget = true;
      state.monthlyBudget = null;
    });
  },
});

export default dashboardSlice.reducer;
