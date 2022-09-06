import logo from './logo.svg';
import './App.css';
import PersonCard from './components/person_card.js'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Cesar" lastName="Jack-Vallee" age={ 22 } hairColor="Black"/>
      <PersonCard firstName="Aeriana" lastName="Jolie" age={ 23 } hairColor="Black"/>
      <PersonCard firstName="Skyy" lastName="Jones-Vallee" age={ 3 } hairColor="Black"/>
      <PersonCard firstName="Maximus" lastName="Dog-Vallee" age={ 63 } hairColor="White, Light-Brown, Gray"/>
    </div>
  );
}

export default App;
