import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MaDetails from './MaDetails';

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
          
          /* */ 
          <Route path="/Ma/:id">
            <MaDetails />
          </Route>
          /* */

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
