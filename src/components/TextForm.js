//add camelcase, randomized capitalization, find and replace, number of occurences of a certain word etc

import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = (text) => {
    const wordsArray = text.trim().split(/\s+/).filter((word) => word !== '');
    return wordsArray.length;
  };

  const [text, setText] = useState('Enter text here');

  const finalWordCount = getWordCount(text);

  const timeToRead = finalWordCount* 0.0042016

  let displayTimeToRead
  if (timeToRead > 0 && timeToRead < 1) {
    displayTimeToRead = "Less than one minute";
  }  
  else {
    displayTimeToRead = Math.round(timeToRead) + " minutes"
  }

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={handleUpClick}>Convert to uppercase</button>

        <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={handleLowClick}>Convert to lowercase</button>



      </div>

      <div className='container my-3'>
        <h1>Your text summary</h1>
        {text.trim() ? (
          <p>
            {finalWordCount} {finalWordCount === 1 ? 'word' : 'words'} and {text.length} {text.length === 1 ? 'character' : 'characters'}
          </p>
        ) : (
          <p>No words and characters</p>
        )}
        <p>Average time taken to read this text: {displayTimeToRead}</p>

      </div>
    </>
  );
}
