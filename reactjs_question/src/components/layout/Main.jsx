import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(8),
    backgroundColor: '#f9f9f9',
  },
}));

const Main = function({ children, open }) {
  const classes = useStyles();

  return(
    <main 
      role="main"
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      {children}
    </main>
  )
}

export default Main
