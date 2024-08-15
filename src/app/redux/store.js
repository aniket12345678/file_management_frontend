import storage from "redux-persist/lib/storage";
import { fileManager } from "../slice/fileManager.slice";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

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
    devTools: true,
    middleware: (getMiddleware) => getMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);