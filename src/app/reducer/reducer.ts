import { Action, ACTION_TYPES } from './actionTypes';
import { State } from './state';

export const initialState: State = {
    isReady: false
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ACTION_TYPES.INIT: {
            return {
                ...state,
                isReady: true
            };
        }

        default:
            return state;
    }
};
