import { useState, useEffect } from 'react';
import { getYelp } from './services/fetch-utils';
import YelpList from './YelpList';

export default function YelpSearch() {

  const [yelp, setYelp] = useState([]);
  const [yelpQuery, setYelpQuery] = useState([97045]);

  async function goFetchYelp() {
    const data = await getYelp(yelpQuery);
    
    setYelp(data.businesses);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await goFetchYelp();
    setYelpQuery('');
  }

  useEffect(() => {
    goFetchYelp();
  }, []); //eslint-disable-line
  
  return (
    <div className='yelp-form'>
      <form onSubmit={handleSubmit}>
        <input value={yelpQuery} onChange={(e) => setYelpQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      <YelpList yelp={yelp}/>
    </div>
  );
}