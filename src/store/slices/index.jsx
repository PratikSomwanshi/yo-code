import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    srcDoc: null,
};

export const innerData = createSlice({
    name: "innerData",
    initialState,
    reducers: {
        addSourceData: (state, { payload }) => {
            state.srcDoc = payload;
        },
    },
});

export const { addSourceData } = innerData.actions;
export default innerData.reducer;
