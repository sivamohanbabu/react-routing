import React  from 'react'
import './App.css';
import Login from './components/login/login';
import Register from './components/login/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from "react-router-dom";




function App() {
  return (
    <div className="App">
   <Router>
 

    
        <Switch>
       
        <Route exact path="/" component={Register}>
        
       
          </Route>
          
          <Route exact path="/register"></Route>
      
            <Route path="/login" component={Login}>
          </Route>
        </Switch>

    </Router>
{/*<Login/>*/}
{/*Register/>*/}
  
    </div>
  );
}

export default App;
