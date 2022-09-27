import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                name: name,
                id: id,
                icon: icon,
                quizIds: [],
            };
        }
    }
});


export const selectTopics = (state) => state.topics.topics;
export const topicsReducer = topicsSlice.reducer;
export const addTopic = topicsSlice.actions.addTopic