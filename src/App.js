import './App.css';
import Home from "./components/Home"
import Pokedex from "./components/Pokedex"
import PokemonDetails from './components/PokemonDetails';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Favorites from './components/Favorites';
import ThemeSwitchButton from './components/ThemeSwitchButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
 


  return (
    <div className="App">
<Router>
   <Navbar/>
           <ThemeSwitchButton/>
      <Switch>
         <Route path="/" exact> <Home/></Route>
      <Route path="/pokedex"> <Pokedex/></Route>
      <Route path="/favorites"><Favorites/></Route>
      <Route path="/:pokemon" ><PokemonDetails/></Route>
      </Switch>
     <Footer/>
</Router>
     
    </div>
  );
}

export default App;
