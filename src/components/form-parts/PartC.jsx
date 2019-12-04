import React from 'react';
import { Field } from 'formik';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import { 
  MuiPickersUtilsProvider, 
  KeyboardDatePicker 
} from '@material-ui/pickers';

import {
  Grid,
  TextField
} from '@material-ui/core';

// Label at the top of the form
export const label = 'Miscellaneous';

// Form part
export const Form = () => (
  <Grid container spacing={3}>

    <Grid item xs={6}>
      <Field name="plantLatin">
        {({
          field,
          meta,
        }) => (
          <TextField
            label="Scientific name"
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
      <Field name="plantPersonal">
        {({
          field,
          meta,
        }) => (
          <TextField
            label="Personal name"
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

    <Grid item xs={4}>
      <Field name="soilComposition">
        {({
          field,
          meta,
        }) => (
          <TextField
            label="Soil Composition"
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

    <Grid item xs={4}>
      <Field name="lastWatered">
        {({
          field: { onChange, onBlur, onError, ...field },
          form,
          meta
        }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="filled"
              label="Last Watered"
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

    <Grid item xs={4}>
      <Field name="nextWatered">
        {({
          field: { onChange, onBlur, onError, ...field },
          form,
          meta
        }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="filled"
              label="Next Watering Date"
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

    <Grid item xs={12}>
      <Field name="sunlight">
        {({
          field,
          meta,
        }) => (
          <TextField
            label="Sunlight notes"
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
