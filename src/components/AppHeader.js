import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { blue, } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="initial">
            Todo list
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}