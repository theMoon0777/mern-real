import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import homeReducer from './slice/homeslice';


// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  home: homeReducer,
});

export default reducer;
