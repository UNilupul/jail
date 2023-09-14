import './App.css';

import {BrowserRouter as Router,Route} from "react-router-dom";
import {Switch} from "react-router-dom";

import Navbar from './components/navBar/navbar';

import Home from './page/home/home';
import User_Registration from './page/home/User_registration/User_registration';
import Item_preview from './page/item preview/item_preview';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user_registration" component={User_Registration} />
          <Route exact path="/item_preview/:id" component={Item_preview} />

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
