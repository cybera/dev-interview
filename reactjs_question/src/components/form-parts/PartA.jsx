import React from 'react';
import { Field } from 'formik';
import {
  Grid,
  TextField
} from '@material-ui/core';

// Label at the top of the form
export const label = 'Plant Identification';

// Form part
export const Form = () => (
  <Grid container spacing={3}>

    <Grid item xs={8}>
      <Field name="plantName">
        {({
          field,
          meta,
        }) => (
          <TextField
            label="Plant name"
            helperText={meta.touched ? meta.error : ''}
            error={meta.touched && Boolean(meta.error)}
            variant="filled"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            {...field}
          />
        )}
      </Field>
    </Grid>

    <Grid item xs={6}>
      <Field name="variety">
        {({
          field,
          meta,
        }) => (
          <TextField
            label="Variety"
            helperText={meta.touched ? meta.error : ''}
            error={meta.touched && Boolean(meta.error)}
            variant="filled"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            {...field}
          />
        )}
      </Field>
    </Grid>
    
  </Grid> 
)
