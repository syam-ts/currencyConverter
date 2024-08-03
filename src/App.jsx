import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_uywH9iacryultvSyaXVU1ST8vbHdlfii2H4HBs0z';

function App() {
  
  const [currencyOptions, setCurrecyOptions] = useState([])

  useEffect(() => {
    axios.get(BASE_URL)
      .then(res => {
        setCurrecyOptions([res.data.base, res.data.data])
      })
      .catch(err => console.log('Error occured', err));
  }, []);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow currencyOptions={ currencyOptions }/>
      <div className="equals"> = </div>
      <CurrencyRow currencyOptions={ currencyOptions }/>
    </>
  );
}

export default App;