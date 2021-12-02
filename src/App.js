import { useEffect, useState } from 'react';
import './App.css';
import { useAppContext } from './context/AppContext';
import actionTypes from './context/reducers/actionTypes';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world';

const boxesStyle = (rows) => {
  return {
    gridTemplateRows: `repeat(${rows}, minmax(10px, 100px))`,
    gridTemplateColumns: `repeat(${rows}, minmax(10px, 100px))`
  }
};

function App() {
  const { width, height } = useWindowSize();
  const state = useAppContext();
  const [boxes, setBoxes] = useState([]);
  const [completed, setCompleted] = useState({});
  const [prev, setPrev] = useState(-1);
  const [curr, setCurr] = useState(-1);
  const [totalBoxes, setTotalBoxes] = useState(-1);
  const [showConfetti, setShowConfetti] = useState(false);
  
  

  useEffect(() => {
    const totalBoxes = Math.floor((state.boxSize * state.boxSize) / 2);
    setTotalBoxes(totalBoxes);
    const halfTheBoxes = new Array(totalBoxes).fill(0).map((_,i) => i + 1);
    const newBoxes = [...halfTheBoxes, ...halfTheBoxes];
    newBoxes.sort(() => Math.random() - .5);
    console.log(newBoxes);
    setBoxes(newBoxes);
  }, [state.boxSize, state.level]);

  useEffect(() => {
    if (prev === -1 || curr === -1) return;
    if (boxes[prev] === boxes[curr]) {
      const obj = {
        ...completed,
        [boxes[curr]]: 1
      };
      setCompleted(obj);
    }
  }, [curr]);

  useEffect(() => {
    if ((Object.keys(completed).length) === totalBoxes) {
      setShowConfetti(true);
      setTimeout(() => {
        state.dispatch({ type: actionTypes.NEXT_LEVEL });
        setShowConfetti(false);
        setCompleted({});
        setPrev(-1);
        setCurr(-1);
      }, 5000);
    }
  }, [completed]);

  const pictureSelected = (idx) => {
    if (idx === prev) return;
    if (prev === -1) {
      setPrev(idx);
    } else if (curr === -1) {
      setCurr(idx);
    } else {
      setPrev(idx);
      setCurr(-1);
    }
  };

  return (
    <div className="App">
      { showConfetti &&
        <Confetti
          width={width}
          height={height}
        />
      }
      <h2>Level: {state.level}</h2>
      <div className="boxes" style={boxesStyle(state.boxSize)}>
        {
          boxes.map((box, i) => {
            return (
              <div key={i} className={`box ${(prev === i || curr === i || completed[box]) ? 'active' : ''} ${completed[box] ? 'completed' : ''}`} onClick={() => pictureSelected(i)}>
                <img src={`${url}/${box}.svg`} />
                <div className="overlay"></div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
