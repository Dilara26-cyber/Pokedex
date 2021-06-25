import './App.css';
import List from "./components/List"
import { Route } from 'react-router';
import PokemonDetails from './components/PokemonDetails';
function App() {
 


  return (
    <div className="App">
      <Route path="/" exact> <List/></Route>
      <Route path="/pokemon/:pokemon" exact><PokemonDetails/></Route>
    </div>
  );
}

export default App;
