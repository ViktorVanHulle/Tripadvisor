import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Contact" exact component={Contact}/>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
