import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Box from './Components/Box';
import Heading from './Components/Heading';
import Jokes from './Components/Jokes';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedElement, setSelectedElement] = useState('');
  const [clicked, setClicked] = useState(false);
  const [elementClicked, setElementClicked] = useState(-1);

  useEffect(() => {
    const requestHelper = async () => {
      const { data } = await axios.get(
        'https://api.chucknorris.io/jokes/categories'
      );
      setCategories(data);
    };
    requestHelper();
  }, []);

  return (
    <div className="App">
      <Heading />
      <div className="container">
        {categories.map((name, i) => {
          return (
            <Box
              id={i}
              name={name}
              setSelectedElement={setSelectedElement}
              elementClicked={elementClicked}
              setElementClicked={setElementClicked}
            />
          );
        })}
      </div>
      {selectedElement && (
        <div className="JokesContainer">
          <h1
            style={{
              textAlign: 'center',
            }}
          >{`Selected Category: ${selectedElement}`}</h1>
          <Jokes selectedElement={selectedElement} clicked={clicked} />
          <div
            style={{
              cursor: 'pointer',
              padding: '25px',
              backgroundColor: 'transparent',
              color: 'cyan',
              width: 'max-content',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            onClick={() => setClicked((prev) => !prev)}
          >
            New Joke
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
