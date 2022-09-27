import { createSlice }  from "@reduxjs/toolkit";

createSlice({
    name: 'topics'
    initialState: {
        topics: {
            topics: {
                '123': {
                    id: '123',
                    name: '',
                    icon: '',
                    quizIds: [],
                }
            }
        },
    }
})