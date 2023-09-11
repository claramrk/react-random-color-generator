export default function App() {
  return (
    <>
      <h1>Random Color Generator</h1>
      <br />

      <div
        style={{
          backgroundColor: 'blue',
          height: '100px',
          width: '100px',
        }}
      >
        <p>Test</p>
      </div>
      <br />
      <br />

      <button
        style={{
          width: '200px',
          backgroundColor: 'maroon',
          color: 'white',
          margin: '10px',
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
    </>
  );
}
