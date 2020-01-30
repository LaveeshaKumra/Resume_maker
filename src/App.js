import React from 'react';
import './App.css';
import Front from './components/front'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Userform from './components/Userform';


function App() {
  
  
  return (
    
    <div className="App">
      <AppBar position="static">
        <Toolbar>

          < Typography variant="h4">
            Build Your Resume
            </Typography>

        </Toolbar>
      </AppBar>
      <Userform/>
     

    </div>

  );
}



export default App;
