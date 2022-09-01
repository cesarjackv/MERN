import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Finish my assignments</li>
        <li>Take a nap</li>
        <li>Play Smite</li>
        <li>Sleep, Eat, Repeat</li>
      </ul>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

