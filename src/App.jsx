import { useState , useEffect} from 'react'
import axios from 'axios'
import './App.css'
import CurrencyRow from './CurrencyRow'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'


function App() {
  useEffect(() => {
    axios.get(BASE_URL) 
    .then(res => console.log(res.data))
    .catch(err => console.log('Error occured', err))
  },[])


  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals"> = </div>
      <CurrencyRow />
    </>
  )
}

export default App
