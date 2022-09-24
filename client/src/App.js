
import './App.css';
import React, {useEffect, useState} from 'react';
import { Routes, Route, useNavigate, } from 'react-router-dom';

import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Breweries from './components/Breweries';
import BreweryShowDetail from './components/BreweryShowDetail';
import UserProfile from './components/UserProfile';
import EditUserProfile from './components/EditUserProfile';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  const [user, setUser] = useState('');
  const [errors, setErrors] = useState([]);
  // const [breweries, setBreweries] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    // authenticating user on page load
    fetch('/authenticated_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user);
        });
      }
    })
  },[]);
  return (

    <div className="App">
      <NavBar user={user} setUser={setUser}/>

      <Routes>
        <Route exact path='/' element={ <LandingPage  /> } />
        <Route exact path='/login' element={ <Login  user={user} setUser={setUser} navigate={navigate} /> } />
        <Route exact path='/logout' element={ <Logout /> } />
        <Route exact path='/signup' element={ <Signup setUser={setUser} /> } />
        <Route exact path='/breweries' element={ <Breweries user={user} /> } />
        <Route exact path='/breweries/:id' element={ <BreweryShowDetail />} />
        <Route exact path='/users/:id' element={ <UserProfile /> } />
        <Route exact path='/users/:id/edit' element={ <EditUserProfile /> } />

        
      </Routes>

      <Footer user={user}/>
    </div>

  );
}

export default App;