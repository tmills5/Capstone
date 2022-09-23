
import './App.css';
import React from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';

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
  return (

    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path='/' element={ <LandingPage  /> } />
        <Route exact path='/login' element={ <Login  /> } />
        <Route exact path='/logout' element={ <Logout /> } />
        <Route exact path='/signup' element={ <Signup /> } />
        <Route exact path='/breweries' element={ <Breweries /> } />
        <Route exact path='/breweries/:id' element={ <BreweryShowDetail />} />
        <Route exact path='/users/:id' element={ <UserProfile /> } />
        <Route exact path='/users/:id/edit' element={ <EditUserProfile /> } />

        
      </Routes>

      <Footer />
    </div>

  );
}

export default App;