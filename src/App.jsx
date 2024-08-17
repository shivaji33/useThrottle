import { useState, useEffect } from 'react';
import './App.css'
import useDebounce from './hooks/useDebounce';
import useThrottle from './hooks/useThrottle';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const throttle = useThrottle(() => {
    console.log('throttle!!!');
  }, 5000);
  

  return (
    <>
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
    <p>{debouncedSearchTerm}</p>
    <button onClick={throttle}>ClickMe</button>
  </>
  );
}

export default App
