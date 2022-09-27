import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId} = action.payload;
            state.quizzes[id] = {
                name: name,
                id: id,
                topicId: topicId,
                cardIds: [],
            };
        }
    }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const quizzesReducer = quizzesSlice.reducer;
export const addQuiz = quizzesSlice.actions.addQuiz
