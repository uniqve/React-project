
import '../styles/App.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import MainPage from '../components/mainPage/index';
import InputBlock from '../components/InputBlock/index'

    
const App = () => {
    return (
      <Router>
            <div className="app">
                <div className='wrapper'>
                <Sidebar />
                    <div className='content'>
                        <MainPage />
                    </div>
                </div>
            </div>
      </Router>
    );
  };
  
  export default App;