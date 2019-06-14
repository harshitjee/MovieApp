import { createReducer, createActions } from 'reduxsauce';


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getData: [],
  onSucess :['movieData'],
  

});

export const UserTypes = Types;

export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
 
};

/* ------------- Reducers ------------- */

const getData = (state = INITIAL_STATE) => {
return { ...state };
};

const onSucess = (state = INITIAL_STATE , {movieData}) => {
  return {...state , movieData }
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.GET_DATA]: getData ,
  [UserTypes.ON_SUCESS]:onSucess,
  
});
