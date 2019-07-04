import React from 'react';
import AppHeader from "./components/AppHeader"
import './App.css';
import AppContainer from './components/AppContainer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';


function App() {
  const theme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: blueGrey,
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <AppHeader>
      </AppHeader>
      <AppContainer>
      </AppContainer>
    </MuiThemeProvider>
  );
}

export default App;
