export const actionTypes = {
  FETCH_PEOPLE: 'FETCH_PEOPLE',
  FETCH_PEOPLE_SUCCESS: 'FETCH_PEOPLE_SUCCESS',
  FETCH_PERSON: 'FETCH_PERSON',
  FETCH_PERSON_SUCCESS: 'FETCH_PERSON_SUCCESS',
};

const BASE_URL = 'https://swapi.co/api';

export const getPeople = () => (dispatch) => {
  const url = `${BASE_URL}/people/`;
  dispatch({ type: actionTypes.FETCH_PEOPLE, payload: null });
  fetch(url).then(response => response.json()).then((data) => {
    dispatch({ type: actionTypes.FETCH_PEOPLE_SUCCESS, payload: data.results });
  });
};

export const getPerson = (id) => (dispatch) => {
  const url = `${BASE_URL}/people/${id}/`;
  dispatch({ type: actionTypes.FETCH_PERSON, payload: null });
  fetch(url).then(response => response.json()).then((data) => {
    dispatch({ type: actionTypes.FETCH_PERSON_SUCCESS, payload: data });
  });
}