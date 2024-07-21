import React from 'react'
import { Button } from '@mui/material'

interface Props {
  loading: boolean
  label: string
}

export default function AuthSubmitButton({ loading, label }: Props): JSX.Element {
  return (
    <Button
      disableElevation
      fullWidth
      disabled={loading}
      size='large'
      type='submit'
      variant='contained'
      sx={{
        background: '#000',
        color: '#FFF',
        ':hover': {
          background: '#353935'
        }
      }}
    >
      {label}
    </Button>
  )
}
