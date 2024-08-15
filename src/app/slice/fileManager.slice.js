import { API } from "../config/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastMessage } from "../middleware/middleware";

export const uploadMedia = createAsyncThunk('/file/manager/add',
    async (data) => {
        try {
            let output = await API.post('/file/manager/add', data);
            if (output.data.code === 200) {
                toastMessage('success', output.data.message);
            }
            return output.data;
        } catch (error) {
            toastMessage('error', error.message);
        }
    }
)

export const fetchAllMedia = createAsyncThunk('/file/manager/find/all',
    async (data) => {
        try {
            let output = await API.post('/file/manager/find/all', data);
            return output.data;
        } catch (error) {
            toastMessage('error', error.message);
        }
    }
)

export const fileManager = createSlice({
    name: 'fileManager',
    initialState: {
        allMediaData: [],
        level: 0,
        fileHistory: []
    },
    reducers: {
        changeLevel: (state, action) => {
            state.level = action.payload;
        },
        addfileHistory: (state, action) => {
            state.fileHistory = [...state.fileHistory, action.payload];
        },
        updatefileHistory: (state, action) => {
            state.fileHistory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllMedia.fulfilled, (state, action) => {
            state.allMediaData = action.payload.data;
        })
    }
});

export const { changeLevel, addfileHistory, updatefileHistory } = fileManager.actions;