import React, { useState } from 'react'
import { Formik } from 'formik'
import {
  AlertColor,
  Button,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { forgotPasswordSchema } from '../schema'
import Banner from '../shared/Banner'
import { useMutation } from '@apollo/client'
import { FORGOT_PASSWORD } from '../api/mutations'
import { Link } from 'react-router-dom'

const initialValue = {
  email: '',
}
interface EmailProps {
  email: string
}

export default function ForgotPasswordForm(): JSX.Element {

  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState<AlertColor>('success')

  const [forgotPassword, { loading }] = useMutation(FORGOT_PASSWORD, {
    onCompleted: (data) => {
      if (!!data) {
        setSeverity('success')
        setMessage('Account change request has been sent to your email')
      }
    },
    onError: () => {
      setSeverity('error')
      setMessage('Sorry, account change request was unsuccessful, please try again')
    }
  })

  const handleSubmit = (event: EmailProps) => {
    forgotPassword({ variables: { email: event.email } })
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValue}
      validationSchema={forgotPasswordSchema}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
        <>
          {message && <Banner severity={severity} message={message} />}
          <br />
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <TextField
                    id='email'
                    type='email'
                    value={values.email}
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                </Stack>
                {touched.email && typeof errors.email === 'string' && (
                  <FormHelperText error id='standard-weight-helper-text-email-forgot-Password'>
                    {errors.email}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component={Link}
                  variant='body2'
                  to='/register'
                  sx={{ textDecoration: 'none', marginTop: '1rem', textAlign: 'center' }}
                  color='primary'
                >
                  Don't have an account? Sign up.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disableElevation
                  disabled={loading}
                  fullWidth
                  size='large'
                  type='submit'
                  variant='contained'
                  sx={{
                    background: '#000',
                    color: '#FFF',
                    ":hover": {
                      background: '#353935'
                    }
                  }}
                >
                  Request Password change
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      )}
    </Formik>
  )
}
