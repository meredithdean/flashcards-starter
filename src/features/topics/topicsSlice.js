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
                quizIds: []
            };
        },
        addQuizIdForTopic: (state, action) => {
            const { topicId, quizId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        },
    }
});


export const selectTopics = (state) => state.topics.topics;
export const topicsReducer = topicsSlice.reducer;
export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;
