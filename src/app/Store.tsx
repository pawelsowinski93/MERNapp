import React, { createContext, Dispatch, useReducer } from 'react';
import { Action } from './reducer/actionTypes';
import { initialState as defaultState, reducer } from './reducer/reducer';
import { State } from './reducer/state';

export const AppContext = createContext<{
    state: State;
    dispatch: Dispatch<Action>;
}>({
    state: defaultState,
    dispatch: () => {}
});

const Store: React.FC<{
    initialState: State;
    children: React.ReactNode;
}> = ({ initialState, children }): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default Store;
