import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    habits: [],
    data: []
}

const habitsSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setHabits: (state, action) => {
            state = {
                ...state,
                habits: action.payload
            };
            return state;
        },
        setData: (state, action) => {
            state = {
                ...state,
                data: action.payload
            };
            return state;
        },
        addHabit: (state, action) => {
            state = {
                ...state,
                habits: {
                    ...state.habits,
                    ...action.payload
                }
            };
            return state;
        },
        removeHabit: (state, action) => {
            const newHabits = state.habits.filter((h) => h.id !== action.payload);
            state = {
                ...state,
                habits: newHabits
            };
            return state;
        },
        addData: (state, action) => {
            state = {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            };
            return state;
        },
        removeData: (state, action) => {
            const newData = state.data.filter((d) => d !== action.payload);
            state = {
                ...state,
                data: newData
            };
            return state;
        }
    }
});

export default habitsSlice.reducer;

export const { setHabits, setData, addHabit, removeHabit, addData, removeData } = habitsSlice.actions;

export const selectHabits = (state) => state.habits.habits;

export const selectHabitsData = (state) => state.habits.data;