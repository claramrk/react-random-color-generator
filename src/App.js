import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [generatedColor, setGeneratedColor] = useState('');

  return (
    <>
      <h1>Random Color Generator</h1>
      <div
        style={{
          backgroundColor: generatedColor,
          height: '100px',
          width: '100px',
          color: 'white',
        }}
      >
        Generated Color: {generatedColor}
      </div>

      <br />
      <br />

      <div>
        <button
          onClick={() => {
            setGeneratedColor(randomColor());
          }}
          style={{
            width: '200px',
            backgroundColor: 'maroon',
            color: 'white',
            margin: '5px',
          }}
        >
          Generate
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
