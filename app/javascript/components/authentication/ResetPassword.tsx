import React from 'react'
import { Grid, Typography } from '@mui/material'
import AuthWrapper from '../shared/AuthWrapper'
import ResetPasswordForm from '../forms/ResetPasswordForm'

export default function ResetPassword(): JSX.Element {

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5' sx={{ textAlign: 'center' }}>Reset Password</Typography>
        </Grid>
        <Grid item xs={12}>
          <ResetPasswordForm />
        </Grid>
      </Grid>
    </AuthWrapper>
  )
}
