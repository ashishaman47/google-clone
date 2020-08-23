export const initialState = {
  term: null,
}; //what does data layer look like --> it's an object -->initially it contain a term --> which is empty --> this is where data gonna live

// whenever we wanna change the data layer we need to dispatch an action
// whenever we hit an enter to search --> we need to dispatch an action --> which says go ahead and change/set the search term.
export const actionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
};

// we have a reducer--> state is the state of data layer, action is whatever we're dispatching into context Api
const reducer = (state, action) => {
  console.log(action);

  //   inside the reducer it's job is to listen to the any dispatched action
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state, //return what the state currently looks like
        term: action.term, //and change the term inside the data layer with whatever action term we dispatched
      };

    default:
      return state; //if it don't know what the dispached action it return the initialState
  }
};
// storing into data layer

export default reducer;
