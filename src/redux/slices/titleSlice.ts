import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialType = {
    title:string
};

const initialState = {
    title:'My Ex'
} as InitialType;

const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        }
    }
});

export const {setTitle } = titleSlice.actions;

const titleReducer = titleSlice.reducer;
export default titleReducer;
