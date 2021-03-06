import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import initialState from '../initialState';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
    return createStore(
        pReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

export const store =  configureStore({...initialState});
export const persistor = persistStore(store);