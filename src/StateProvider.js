import React, { createContext, useContext, useReducer } from 'react';

//preparing data layer
export const StateContext = createContext();

//higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    {/* App is the children in index.js */}
  </StateContext.Provider>
);

//initialState --> is what that datalayer looks like when app is loaded
// reducer --> is clever and listens to changes

// this is Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);

// snippet of code for react context api
// next thing we need is initialState and reducer --> and all of these is going to live in file reducer.js
