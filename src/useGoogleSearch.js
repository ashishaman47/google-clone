import { useState, useEffect } from 'react';
import API_KEY from './keys';

// you gonna need this key --> we basically used google which search engine to use --> the one we selected searches the entire web
const CONTEXT_KEY = '5c740f6ecfab40d8f';

// creating custom hooks
const useGoogleSearch = (term) => {
  // this hook will have its own piece of sate called data
  const [data, setData] = useState(null);

  //   whenever we use this hook it fires useEffect()--> this useEffect() is dependent on term
  useEffect(() => {
    // whenever you have async func or async any action inside useEffect you have to make function
    const fetchData = async () => {
      // this is the endpoint which connects to google search api --> we pass in the api key, then context key (cx), and query (q) i.e term
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json()) //when u get the response back and change it into json
        .then((result) => {
          setData(result); //whatever the result is setData to that result
        });
    };

    fetchData(); //then fetchData()
  }, [term]);

  return { data };
};

// we pass term inside this hook and whenever term changes we gonna fire off the code inside the useEffect()

export default useGoogleSearch;

// if we not only typed in a new search, not only did we hit enter on the new search but we passed to our data layer
// our data layer got new term (say sachin) and then it fires the useEffect()
// then this useEffect() will get you all the search result data
