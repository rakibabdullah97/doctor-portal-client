import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import DashBoard from './Pages/DashBoard/DashBoard'
import Login from './Pages/Login/Login/Login';
import Registar from './Pages/Login/Registar/Registar';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registar'>
              <Registar></Registar>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
