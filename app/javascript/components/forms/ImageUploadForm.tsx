import React from 'react'
import { useFormikContext } from 'formik'
import {
  Grid,
  Stack,
  TextField,
} from '@mui/material'
import AuthSubmitButton from 'components/shared/AuthSubmitButton'

interface ImageProp {
  image: string
}

export default function ImageUploadForm(): JSX.Element {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    isSubmitting
  } = useFormikContext<ImageProp>()

  return (
    <form noValidate onSubmit={handleSubmit} encType="multipart/form-data">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <TextField
              id='image'
              type='file'
              value={values.image}
              name='image'
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthSubmitButton loading={isSubmitting} label='Upload Your Avatar' />
        </Grid>
      </Grid>
    </form>
  )
}
