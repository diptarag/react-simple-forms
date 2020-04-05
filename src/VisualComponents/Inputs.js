import React from 'react';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const FormTextInput = props => {
  const [field, meta] = useField(props);
  return (
    <TextField {...props} inputProps = {{...field}} error = {meta.touched && typeof meta.error !== 'undefined'} helperText = {meta.touched && meta.error} />
  );
};

const FormCheckBox = ({ label, checkBoxValue, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <FormControlLabel
      control={<Checkbox {...props} value={checkBoxValue} inputProps = {{...field}} checked={field.value} />}
      label={label}
    />
  );

};

export { FormTextInput, FormCheckBox };