import React from 'react'
import { Grid, Typography } from '@mui/material'
import AuthWrapper from '../shared/AuthWrapper'
import ForgotPasswordForm from '../forms/ForgotPasswordForm'

export default function ForgotPassword(): JSX.Element {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5' sx={{ textAlign: 'center' }}>Forgot Password</Typography>
        </Grid>
        <Grid item xs={12}>
          <ForgotPasswordForm />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
