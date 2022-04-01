import React from 'react'
import { useState } from 'react';

 const Search = () => {
   const [gifs, setGifs] = useState([]);
    const [text, setText] = useState('')
    
    const getGifs = async (e) => {
      // e.preventDefault();
  
      const gifsData = await fetch(
        `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`
      ).then((response) => response.json());
      setGifs(gifsData.data);
    };

       	const result = gifs.map((gif) => (
          <figure key={gif.id}>
            <img src={gif.images.fixed_width.url} alt='Result' />
            <figcaption className='gif-title'>{gif.title}</figcaption>
          </figure>
        ));
  return (
    <div>
        <input onChange={(e) => setText(e.target.value)} />
        <button onClick={getGifs}>Select</button>
        <div>{result}</div>
    </div>
  )
}

export default Search;