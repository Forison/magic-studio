import React from 'react'
import { useFormikContext } from 'formik'
import {
  FormHelperText,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import PhoneInput from 'react-phone-input-2'
import AuthSubmitButton from 'components/shared/AuthSubmitButton'

interface Prop {
  phone: string
}

export default function SendPhoneVerificationForm({
  phone,
}: Prop): JSX.Element {
  const { handleSubmit, isSubmitting } = useFormikContext<any>()

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <Typography align='center'>Verify your Phone Number</Typography>
            <PhoneInput
              country={'us'}
              value={phone}
              containerStyle={{ flex: 1 }}
              inputStyle={{ width: '100%', height: '56px' }}
              inputProps={{ name: 'phone' }}
              disabled
            />
          </Stack>
          <FormHelperText id='standard-weight-helper-code' sx={{ fontSize: '9px' }}>
            A confirmation code will be sent to this phone number to validate your number
          </FormHelperText>
        </Grid>
        <Grid item xs={12}>
          <AuthSubmitButton loading={isSubmitting} label='Request OTP Code' />
        </Grid>
      </Grid>
    </form>
  )
}