import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import Main from './Main';
import GreenTheme from './GreenTheme';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  }
}));

const Layout = function({ children }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={GreenTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Main>
          {children}
        </Main>
      </div>
    </ThemeProvider>
  )
}

export default Layout;
