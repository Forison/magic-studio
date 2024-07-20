import React from 'react'
import { Grid, ImageList, ImageListItem } from '@mui/material'
import AuthCard from './AuthCard'
import Footer from './CopyRight'

interface Props {
  children: JSX.Element
}

export default function AuthWrapper({ children }: Props): JSX.Element {
  return (
    <Grid container>
      <Grid item md={7} sx={{ display: { sm: 'none', md: 'block' } }}>
        <ImageList sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0
        }}>
          <ImageListItem>
            <img src={require('../images/auth.png')} style={{ height: '100vh' }} />
          </ImageListItem>
        </ImageList>
      </Grid>

      <Grid
        container
        direction='column'
        item
        xs={12} md={5}
      >
        <ImageList sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ImageListItem>
            <img src={require('../images/logo.png')} style={{ width: '200px' }} />
          </ImageListItem>
        </ImageList>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          sx={{
            minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' },
            marginTop: '-100px'
          }}
        >
          <AuthCard>{children}</AuthCard>
          <Grid item xs={12} sx={{ marginTop: '-100px' }}>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}
