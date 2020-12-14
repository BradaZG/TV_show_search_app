import React, { useState, useContext } from 'react';

// Context
import ShowsContext from '../context/shows/showsContext';
import AlertsContext from '../context/alerts/alertsContext';

// Components
import Alert from './Alert';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const showsContext = useContext(ShowsContext);
  const { searchShows } = showsContext;

  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (searchTerm === '') {
      setAlert('Please enter a TV show...', 'danger');
    } else {
      searchShows(searchTerm);
    }
    searchShows(searchTerm);
  };

  return (
    <div className='searchbar'>
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
      <form className='searchbar__form'>
        <input
          type='text'
          placeholder='Search for a TV Show...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='btn btn-block' onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
