import { Link, Route } from 'react-router-dom';
import './App.css';
import Counter from './pages/Counter';
import Cronometer from './pages/Cronometer';
import Temporizador from './pages/Temporizador';

function App() {
  return (
    <div className="App">
      <h1>Página Inicial</h1>

      <Link to="/counter"> Counter </Link>
      <Link to="/cronometer"> Cronometro </Link>
      <Link to="/temporizador"> Temporizador </Link>

      <Route path="/counter" render={ () => <Counter /> } />
      <Route path="/cronometer" render={ () => <Cronometer /> } />
      <Route path="/temporizador" render={ () => <Temporizador /> } />
    </div>
  );
}

export default App;
