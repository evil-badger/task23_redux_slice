import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import counterReducer from './counterSlice';

export default configureStore({
    reducer:{
        tasks: taskReducer,
        counter:counterReducer,
    },
});



