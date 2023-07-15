import React, { useState } from 'react';
import "./../styles/styles.css";

function InputDisplay() {
  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDisplayClick = () => {
    setDisplayedValue(inputValue);
  };

  return (
    <div className='content'>
      <textarea rows="4" cols="50" type="text"
        value={inputValue}
        onChange={handleInputChange}></textarea>
      <br />
      
      <br />
      <button  className='btn' onClick={handleDisplayClick}>Display Input</button>
      <div className='output'><p>{displayedValue}</p></div>
    </div>
  );
}

export default InputDisplay;
