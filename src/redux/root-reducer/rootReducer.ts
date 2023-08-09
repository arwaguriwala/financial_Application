import { combineReducers } from "redux";
import barChartReducer from "../feature/bar-chart/barChartSlice";

export const rootReducer = combineReducers({
  chartForm: barChartReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
