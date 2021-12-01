import { useEffect, useState } from "react";
import "./App.css";
import ChromeColor from '@uiw/react-color-chrome';
import Values from 'values.js';
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [color, setColor] = useState('#ccc');
  const [shades, setShades] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (color) => {
    setColor(color.hex);
    const colorValues = new Values(color.hex);
    const newColors = colorValues.all(10);
    newColors.pop();
    console.log(newColors);
    setShades(newColors);
  };

  useEffect(() => {
    onChange({ hex: '#ccc' });
  }, []);

  return (
    <div className="wrapper">
      <h1 className="heading">SHADES GENERATOR <span onClick={() => setShowPicker(!showPicker)}>({color})</span></h1>
      <div className="color-picker">
        {
          showPicker && <ChromeColor color={color} onChange={onChange} />
        }
      </div>
      <div className="shades">
        <ul className="shades-list">
          {
            shades.map(shade => {
              return (<CopyToClipboard className="color-code" text={'#' + shade.hex}>
                <li style={{ backgroundColor: '#' + shade.hex, color: shade.type === 'shade' ? 'white' : 'black' }}>
                  #{shade.hex}
                </li>
              </CopyToClipboard>)
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
