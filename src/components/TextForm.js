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

  const handleMemeClick = () => {
    let result = '';
    for (let i = 0; i< text.length; i++){
        const n = Math.random();
        if (n < 0.5){
            result += text[i].toLowerCase()
        }
        else {
            result += text[i].toUpperCase()
        }
        setText(result);
    }

    
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = (text) => {
    const wordsArray = text.trim().split(/\s+/).filter((word) => word !== '');
    return wordsArray.length;
  };

  const handleFindAndReplace = () => {
    setText((prevText) => prevText.replace(new RegExp(findText, 'g'), replaceText));
    setFindText(''); // Clear findText input after find and replace
    setReplaceText(''); // Clear replaceText input after find and replace
    setFindReplaceVisible(false); // Hide the "Find and Replace" fields after find and replace
  };

  const [text, setText] = useState('Enter text here');
  const [findText, setFindText] = useState('');
  const [replaceText, setReplaceText] = useState('');
  const [isFindReplaceVisible, setFindReplaceVisible] = useState(false); // State variable for toggle visibility

  const finalWordCount = getWordCount(text);

  const timeToRead = finalWordCount * 0.0042016;

  let displayTimeToRead;
  if (timeToRead > 0 && timeToRead < 1) {
    displayTimeToRead = 'Less than one minute';
  } else {
    displayTimeToRead = Math.round(timeToRead) + ' minutes';
  }

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <label htmlFor='myBox' className='form-label'></label>
          <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows='8'></textarea>
        </div>

        <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={handleUpClick}>
          Convert to uppercase
        </button>

        <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={handleLowClick}>
          Convert to lowercase
        </button>

        <button className='btn btn-primary' style={{ marginRight: '10px' }} onClick={handleMemeClick}>
          ConVErT tO tHIs
        </button>

        {/* Toggle visibility of Find and Replace fields */}
        <button
          className='btn btn-primary'
          onClick={() => setFindReplaceVisible((prevVisible) => !prevVisible)}
        >
          Find and Replace
        </button>

        {isFindReplaceVisible && (
          <>
            {/* Find and Replace UI elements */}
            <input
              type='text'
              placeholder='Find'
              value={findText}
              onChange={(e) => setFindText(e.target.value)}
            />
            <input
              type='text'
              placeholder='Replace'
              value={replaceText}
              onChange={(e) => setReplaceText(e.target.value)}
            />
            <button className='btn btn-primary' onClick={handleFindAndReplace}>
              Replace All
            </button>
          </>
        )}
      </div>

      <div className='container my-3'>
        <h1>Your text summary</h1>
        {text.trim() ? (
          <p>
            {finalWordCount} {finalWordCount === 1 ? 'word' : 'words'} and {text.length}{' '}
            {text.length === 1 ? 'character' : 'characters'}
          </p>
        ) : (
          <p>No words and characters</p>
        )}
        <p>Average time taken to read this text: {displayTimeToRead}</p>
      </div>
    </>
  );
}
