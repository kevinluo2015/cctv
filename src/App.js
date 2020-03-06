import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'

import Router from './Router/router'
import BrowserRouter from 'react-router-dom/BrowserRouter'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Grid container>
            <Grid item xs={12}>
              <Header myHeader="Access Card System"/>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={2}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={0}>
                  <Divider orientation="vertical" flexiItem></Divider>
                </Grid>
                <Grid item xs={9}>
                    <Router/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Footer myFooter="@ ANZ Chengdu"/>
            </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
