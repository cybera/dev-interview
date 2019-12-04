import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginTop: theme.spacing(2),
  },
  root: {
    padding: theme.spacing(3)
  }
}))

export const validate = Yup.object().shape({
  plantName: Yup.string()
    .required('A name is required for your plant'),
  personalName: Yup.string(),
  variety: Yup.string(),
  acquiredOn: Yup.date()
    .default(() => new Date())
    .required('Please enter a date (even if it\'s just an approximation)'),
  price: Yup.string()
    .matches(/^\d+(?:\.\d{2})$/, 'Price must contain 2 decimal places'),
  source: Yup.string(),
  heightMin: Yup.string(),
  heightMax: Yup.string(),
  widthMin: Yup.string(),
  widthMax: Yup.string(),
  plantLatin: Yup.string(),
  plantPersonal: Yup.string(),
  soilComposition: Yup.string(),
  lastWatered: Yup.date()
    .default(() => new Date())
    .required('Please enter a date (even if it\'s just an approximation)'),
  nextWatered: Yup.date()
    .default(() => new Date())
    .required('Please enter a date (even if it\'s just an approximation)'),
  sunlight: Yup.string()
});

export const defaultValues = {
  plantName: '',
  personalName: '',
  variety: '',
  acquiredOn: new Date(),
  price: '0.00',
  source: '',
  heightMin: '',
  heightMax: '',
  widthMin: '',
  widthMax: '',
  plantLatin: '',
  plantPersonal: '',
  soilComposition: '',
  lastWatered: new Date(),
  nextWatered: new Date(),
  sunlight: ''
}

export const submitForm = (values, _others) => {
  alert('Submitted', values);
}
