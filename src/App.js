import * as randomHex from 'random-hex';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const hexColorRandom = randomColor();
  const hexColorUserInput = randomColor({
    // luminosity: userInputLuminosity,
    // hue: userInput,
  });
  const [generatedColor, setColor] = useState('');
  console.log(hexColorRandom);

  return (
    <>
      <h1>Random Color Generator</h1>
      <br />

      <div
        style={{
          backgroundColor: `${generatedColor}`,
          height: '100px',
          width: '100px',
        }}
      >
        <p
          style={{
            color: 'white',
          }}
        >
          {generatedColor}
        </p>
      </div>

      <br />
      <br />
      <div>
        <button
          onClick={() => {
            setColor(randomColor());
          }}
        >
          Generate random color
        </button>

        <br />
        <br />

        <button
          style={{
            width: '200px',
            backgroundColor: 'maroon',
            color: 'white',
            margin: '5px',
          }}
        >
          Request hue & luminosity
        </button>
        <input
          style={{
            width: '50px',
            margin: '5px',
          }}
        />
        <input
          style={{
            width: '50px',
            margin: '5px',
          }}
        />
        <br />
        <br />

        <button
          style={{
            width: '200px',
            backgroundColor: 'maroon',
            color: 'white',
            margin: '5px',
          }}
        >
          Request box size
        </button>
        <input
          style={{
            width: '50px',
            margin: '5px',
          }}
        />
      </div>
    </>
  );
}
