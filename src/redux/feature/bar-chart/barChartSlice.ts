import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBarChartState } from "../../../interfaces/interfaces";
import { getEmployees } from "./barChartCrud";

const initialState: IBarChartState = {
  isLoading: false,
  employeeData: [],
  error: null,
};

//Get employee list
export const getEmployee: any = createAsyncThunk(
  "barChartSlice/getEmployee",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await getEmployees();
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const barChartSlice = createSlice({
  name: "barChartSlice",
  initialState: initialState,
  reducers: {
    clearState: (state: any) => {
      state.loading = false;
      state.employeeData = [];
      state.error = "";
    },
  },

  extraReducers: (builder) => {
    // getEmployee
    builder.addCase(getEmployee.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEmployee.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employeeData = action.payload;
    });
    builder.addCase(getEmployee.rejected, (state, error) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});
export const { clearState } = barChartSlice.actions;
export default barChartSlice.reducer;
