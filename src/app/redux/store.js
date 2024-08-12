import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { fileManager } from "../slice/fileManager.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    fileManager: fileManager.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true
});

export const persistor = persistStore(store);