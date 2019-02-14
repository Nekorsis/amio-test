import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { actionTypes } from './actions';


const initialState = {
  peopleList: {payload: []},
  person: {payload: []},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PEOPLE:
      return { ...state, peopleList: { status: 'loading', payload: null } };
    case actionTypes.FETCH_PEOPLE_SUCCESS:
      return { ...state, peopleList: { status: 'done', payload: action.payload } };
    case actionTypes.FETCH_PERSON:
      return { ...state, person: { status: 'loading', payload: null } };
    case actionTypes.FETCH_PERSON_SUCCESS:
      return { ...state, person: { status: 'done', payload: action.payload } };
    default:
      return state;
  }
};


const store = createStore(
  appReducer,
  applyMiddleware(thunk),
);

export default store;