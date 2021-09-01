
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Brands } from './Brands';
import { Link, Route,Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Users } from './Users';
import { Intial_users } from './Intial_users';
import AppBar from '@material-ui/core/AppBar';



function App() {
  return (
    <div>
      <AppBar position="static">
        <nav>
      <Link to="/">Home<br /></Link>
      <Link to="/brands">Brands<br /></Link>
      <Link to="/users">Users</Link>
      </nav>
      </AppBar>
      <Switch>
      
        <Route path="/brands">
          <Brands />
          </Route>
          <Route path="/brands">
          <Brands />
          </Route>
          <Route path="/users/:id">
          <UsersDetails />
          </Route>
          <Route path="/users">
          <Users />
          </Route>
          
          <Route path="/">
          <Home />
          </Route>
          <Route path="*">
          <Notfound />
          </Route>
      </Switch>
    </div>
  );
}
function Notfound() { 
  return (
  <div>
    <h2>Page not found</h2>
    </div>
)}
function Home() { 
  return (
  <div>
    <h2>Welcome to ZANY'S Cart</h2>
    </div>
)}

function UsersDetails() { 
  const {id} = useParams();
  //matc useid with list 
  const user= Intial_users.find((user)=>user.id === +id);
  return (
  <div>
    <h2>Details about users</h2>
    
    <h4> users: {id}</h4>
    <h5>Name:{user.name}</h5>
    </div>
)}
export default App;