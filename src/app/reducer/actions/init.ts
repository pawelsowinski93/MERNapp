import { Dispatch } from 'react';
import { Action, ACTION_TYPES } from '../actionTypes';

export const handleInit = (dispatch: Dispatch<Action>): void => {
    dispatch({ type: ACTION_TYPES.INIT });
};
