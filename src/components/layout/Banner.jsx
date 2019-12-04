import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Box,
  Container
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.grey[200],
    marginBottom: theme.spacing(5)
  },
  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    position: 'relative'
  }
}))

const Banner = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Container className={classes.container}>
        {children}
      </Container>
    </Box>
  )
}

export default Banner;
