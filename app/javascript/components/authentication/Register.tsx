import React from 'react'
import { Grid, Typography } from '@mui/material';
import AuthWrapper from '../shared/AuthWrapper';
import RegisterForm from '../forms/RegisterForm';

export default function Register(): JSX.Element {
  return (
    <AuthWrapper>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h5' sx={{ textAlign: 'center' }}>Sign up</Typography>
        </Grid>
        <Grid item xs={12}>
          <RegisterForm />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
