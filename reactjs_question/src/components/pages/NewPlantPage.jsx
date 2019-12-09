import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core';

import { Banner } from '../layout';
import NewPlantForm from '../PlantForm';

const useStyles = makeStyles(theme => ({
  backButton: {
    marginRight: theme.spacing(2),
  },
}))

const NewPlantPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Banner>
        <Typography variant="h2">
          New Plant
        </Typography>
      </Banner>

      <Container>
        <Grid container spacing={6}>
          <Grid item xs={7}>
            <NewPlantForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default NewPlantPage;
