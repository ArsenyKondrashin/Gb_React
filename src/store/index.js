import { createStore, compose, combineReducers, applyMiddleware } from "redux"
import { messageReducer } from "./chats/reducer";
import { profileReducer } from "./profile/reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

export const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
    profile: profileReducer,
    chats: messageReducer,
});

export const persistConfig = {
    key: 'root',
    storage,
}

const persistReduced = persistReducer(persistConfig, rootreducer);

export const store = createStore(
    persistReduced,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);