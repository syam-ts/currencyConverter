import React, {useState} from 'react';

function CurrencyRow(props) {
  const {
    currencyOptions
  } = props;

  const [fromcurrecy, setFromCurrecy] = useState()
  const [tocurrecy, setToCurrecy] = useState()

  console.log('The data : ', currencyOptions);

  return (
    <div>
      <input type="number" className="input"/>
      <select>
        {currencyOptions.length > 1 && typeof currencyOptions[1] === 'object'
          ? Object.keys(currencyOptions[1]).map((currencyCode, index) => (
              <option key={index} value={currencyCode}>{currencyCode}</option>
            ))
          : <option value="">No options available</option>
        }
      </select>
    </div>
  );
}

export default CurrencyRow;