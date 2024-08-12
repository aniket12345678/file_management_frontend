import { API } from "../config/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const uploadFolder = createAsyncThunk('',
    async (data) => {
        try {
            let output = await API.post('/file/manager/add', data);
            console.log('output:- ', output);
        } catch (error) {

        }
    }
)

// export const uploadFile = createAsyncThunk('',
//     async () => {
//         try {
//             API.post('', data)
//         } catch (error) {

//         }
//     }
// )

export const fileManager = createSlice({
    name: 'fileManager',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(uploadFolder.fulfilled, (state, action) => {
            console.log('action.payload:- ', action.payload);
        })
    }
});