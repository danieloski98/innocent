import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// components
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Done from './Pages/Done';

function App() {
  return (
    <div className="w-full h-screen bg-yellow-500">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/done" component={Done} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
