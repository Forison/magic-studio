import React from 'react'
import { useFormikContext } from 'formik'
import {
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import AuthSubmitButton from 'components/shared/AuthSubmitButton'

export default function VerifyPhoneNumberForm(): JSX.Element {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    isSubmitting,
  } = useFormikContext<any>()

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Typography align="center">Verify Phone Number</Typography>
            <TextField
              id="code"
              type="text"
              value={values.code}
              name="code"
              placeholder="Enter verification code"
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={Boolean(touched.code && errors.code)}
            />
          </Stack>
          {touched.code && typeof errors.code === 'string' && (
            <FormHelperText error id="standard-weight-helper-code">
              {errors.code}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <AuthSubmitButton loading={isSubmitting} label='Verify phone number' />
        </Grid>
      </Grid>
    </form>
  )
}
