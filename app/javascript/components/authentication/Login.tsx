import React from 'react'
import { Grid, Typography } from '@mui/material'
import AuthWrapper from '../shared/AuthWrapper'
import LoginForm from '../forms/LoginForm'

export default function Login(): JSX.Element {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5' sx={{ textAlign: 'center' }}>Login</Typography>
        </Grid>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
    </AuthWrapper>
  )
}
