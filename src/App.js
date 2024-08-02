import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      
    <div className="App">
      <Navbar />
      <div className="content">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="*">
             <NotFound></NotFound>
          </Route>

        </Switch>

      </div>


    </div>
    </Router>
  );
}

export default App;
