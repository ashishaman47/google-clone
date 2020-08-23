import React, { useState, useEffect } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hideButtons = false }) {
  //state is something how you write a variable inside react
  const [input, setInput] = useState('');
  const history = useHistory(); //provides with browser history --> helps to redirect to page

  //using hooks --> it has state (whatever datal layer looks like), dispatch (this is like a gun which allows us to shoot action into the data layer so that we can change)
  const [{}, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();
    console.log('search term -->', input);

    // whenever we do search we need to dispatch an actionType
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input, //inside reducer we also need term which we changes with action.term --> so action.term is here which we have tracked here in (input)
    });

    // do something with input.....
    history.push('/search');
  };

  return (
    //   adding enter functionality with google search button --> so as it works with enter key --> convert the div to form, and type='submit' to button
    <form className='search'>
      <div className='search__input'>
        {/* Search icon */}
        <SearchIcon className='search__inputIcon' />
        {/* input */}
        {/* mapping the input to state value */}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        {/* mic icon */}
        <MicIcon />
      </div>

      {/* if the hideButtons props are passed use this class that class display's none */}
      {!hideButtons ? (
        <div className='search__buttons'>
          {/* outlined provide nice border to the button */}
          <Button onClick={search} type='submit' variant='outlined'>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search__buttons'>
          {/* outlined provide nice border to the button */}
          <Button
            className='search__buttonsHidden'
            onClick={search}
            type='submit'
            variant='outlined'
          >
            Google Search
          </Button>
          <Button className='search__buttonsHidden' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
