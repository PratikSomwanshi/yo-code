import { configureStore } from "@reduxjs/toolkit";
import innerDataReducer from "./slices";

export const store = configureStore({
    reducer: {
        innerDataReducer,
    },
});
