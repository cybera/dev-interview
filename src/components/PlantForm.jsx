import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Typography, Paper } from '@material-ui/core'

import { useStyles, validate, defaultValues, submitForm } from './extras'
import { PartA, PartB, PartC } from './form-groups';


const PlantForm = (props) => {
  const classes = useStyles();
  // TODO: initialize the step variable and track its state
  
  const handleNext = () => {
    // TODO: increase step by 1
  }

  const handleBack = () => {
    // TODO: decrease step by 1
  }

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={validate}
      onSubmit={submitForm}
    >
      <Form autoComplete="off">
        <Paper className={classes.root}>

          {/* TODO: only show the form for the current step */}
          <Typography variant="h4">{PartA.label}</Typography>
          <PartA.Form />
          
          <Typography variant="h4">{PartB.label}</Typography>
          <PartB.Form />

          <Typography variant="h4">{PartC.label}</Typography>
          <PartC.Form />

          <div className={classes.actionsContainer}>
            <Button 
              className={classes.button}
              disabled={false} // TODO: only disable the "Back" button on the first step
              color="secondary"
              variant="contained"
              onClick={handleBack}
            >
              Back
            </Button>
            
            {/* TODO: hide the "Next" button if you're on the last step */}
            <Button 
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              Next
            </Button>

            {/* TODO: hide the "Submit Plant" button if you're not on the last step */}
            <Button 
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleBack}
              type="submit"
            >
              Submit Plant
            </Button>
          </div>
        </Paper>
      </Form>
    </Formik>
  )
}

export default PlantForm;
