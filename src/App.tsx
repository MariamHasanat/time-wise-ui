import './App.css';

function App() {
  return (
    <div className="App">
      <h3 style={{ "fontSize": "var(--header-font-size)" }}>Header</h3>
      <h3 style={{ "fontSize": "var(--subheader-font-size)" }}>Subheader</h3>
      <p style={{ "fontSize": "var(--body-font-size)" }}>body</p>
      <p style={{ "fontSize": "var(--body-font-size)", "color":"var(--grey-font-color)" }}>grey body</p>

    </div>
  );
}

export default App;
