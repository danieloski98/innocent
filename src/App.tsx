import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <div className="w-full h-screen bg-yellow-500">
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
