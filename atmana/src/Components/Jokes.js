import axios from 'axios';
import './Jokes.css';
import React, { useEffect, useState } from 'react';

function Jokes({ selectedElement, clicked }) {
  const [content, setContent] = useState('');
  useEffect(() => {
    const requestHelper = async () => {
      const { data } = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${selectedElement}`
      );

      setContent(data.value);
    };
    requestHelper();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked, selectedElement]);

  return <div className="JokeBox">{content}</div>;
}

export default Jokes;
