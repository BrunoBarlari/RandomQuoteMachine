import { configureStore } from "@reduxjs/toolkit";
import tasksReducers from "../features/tasks/taskSlice"; //Import from default

export const store = configureStore({
	reducer: {
		tasks: tasksReducers,
	},
});
