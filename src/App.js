import './App.css';
import { Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from './components/Navbar';
import Maintenance from './components/Maintenance';
import Safety from './components/Safety';
import NewTips from './components/NewTips';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/maintenance">
        <Maintenance/>
      </Route>
      <Route path="/safety">
        <Safety/>
      </Route>
    </div>
  );
}

export default App;
