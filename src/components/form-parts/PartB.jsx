import React from 'react';
import { Field } from 'formik';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import { 
  MuiPickersUtilsProvider, 
  KeyboardDatePicker 
} from '@material-ui/pickers';

import {
  TextField,
  Grid,
  InputAdornment
} from '@material-ui/core';

// Label to appear at the top of the form
export const label = 'Details & Specs';

// Form part
export const Form = () => (
  <Grid container spacing={3}>
    <Grid item xs={4}>
      <Field name="acquiredOn">
        {({
          field: { onChange, onBlur, onError, ...field },
          form,
          meta
        }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="filled"
              label="Date Acquired"
              format="MM/dd/yyyy"
              onError={error => {
                if (error !== form.errors[field.name]) {
                  form.setFieldError(field.name, error)
                }
              }}
              onBlur={() => form.setFieldTouched(field.name, true)}
              onChange={date => form.setFieldValue('acquiredOn', date, true)}
              helperText={meta.touched ? meta.error : ''}
              error={meta.touched && Boolean(meta.error)}
              inputVariant="filled"
              fullWidth
              {...field}
            />
          </MuiPickersUtilsProvider>
        )}
      </Field>
    </Grid>

    <Grid item xs={3}>
      <Field name="price">
        {({
          field,
          meta
        }) => (
          <TextField
            label="Price"
            helperText={meta.touched ? meta.error : ''}
            error={meta.touched && Boolean(meta.error)}
            variant="filled"
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
            {...field}
          />
        )}
      </Field>
    </Grid>

    <Grid item xs={5}>
      <Field name="source">
        {({
          field,
          meta
        }) => (
          <TextField
            label="Source"
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

    <Grid item xs={3}>
      <Field name="heightMin">
        {({
          field,
          meta
        }) => (
          <TextField
            label="Height From"
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
    
    <Grid item xs={3}>
      <Field name="heightMax">
        {({
          field,
          meta
        }) => (
          <TextField
            label="Height To"
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

    <Grid item xs={3}>
      <Field name="widthMin">
        {({
          field,
          meta
        }) => (
          <TextField
            label="Width From"
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
    
    <Grid item xs={3}>
      <Field name="widthMax">
        {({
          field,
          meta
        }) => (
          <TextField
            label="Width To"
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
