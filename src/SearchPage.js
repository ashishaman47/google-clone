import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
  // whhenever we grab a value from data layer it gives us a state and dispatch --> we can destructre and get the term that we need
  const [{ term }, dispatch] = useStateValue();

  // LIVE API CALL
  const { data } = useGoogleSearch(term);

  // get the data from stored response --> local response --> because we have limited queries a day
  // Mock Api Call
  // const data = Response;

  console.log(data); //search result returned by useGoogleSearch custom hook created by us

  return (
    // BEM naming convention
    <div className='searchPage'>
      {/* search header */}
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            className='searchPage__logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt=''
          />
        </Link>

        <div className='searchPage__headerBody'>
          <Search hideButtons />

          <div className='searchPage__options'>
            <div className='searchPage__optionsLeft'>
              <div className='searchPage__option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage__option'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='searchPage__option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='searchPage__option'>
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className='searchPage__option'>
                <RoomIcon />
                <Link to='/maps'>Maps</Link>
              </div>
              <div className='searchPage__option'>
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>

            <div className='searchPage__optionsRight'>
              <div className='searchPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* search result */}
      {term && (
        <div className='searchPage__results'>
          <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className='searchPage__result'>
              <a href={item.link}>
                {/* returning image if present */}
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className='searchPage__resultImage'
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=''
                    />
                  )}
                {item.displayLink}
              </a>
              <a className='searchPage__resultTitle' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;

//now we need to do is --> we just wanna run a search on that term
// so we need to go ahead and connect to google and run a search on it.
// so we'll be using custom search api

// https://developers.google.com/custom-search/v1/using_rest

// click identify your appplication --> Get Key -->Google Custom Api Key
// AIzaSyDlnDLqz_6o1U2aUEWrPz_daq1l0VgzkBA
// we have a search limit of 100 queries a day so don't share your API key with others

// In order to use google search api you have to do one more step
// go to --> https://cse.google.com/cse/create/new
