// project imports

// action - state management
import * as actionTypes from './actions';

export const initialState = {
    loading: false,
    error: null,
    compare: {},
    value: {}
};

// ==============================|| Home REDUCER ||============================== //

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMPARE:
      return {
        ...state,
        compare: action.payload
      };
    case actionTypes.GET_VALUE:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};

export default homeReducer;
