import React, { useState } from 'react'
import { Formik } from 'formik'
import { useMutation } from '@apollo/client'
import { User } from 'components/interface'
import { AlertColor } from '@mui/material'
import EditUserForm from '../forms/EditUserForm'
import { UserUpdateSchema } from '../schema'
import Banner from '../shared/Banner'
import { UPDATE_USER } from '../api/mutations'


const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}
// TODO: change type to ideal one 
export default function EditProfile({ user }: any): JSX.Element {
  console.log(user)
  const [message, setMessage] = useState<string>('')
  const [severity, setSeverity] = useState<AlertColor>('success')
  const [mutate] = useMutation(UPDATE_USER, {
    onCompleted: (data) => {
      if (!!data) {
        setSeverity('success')
        setMessage('Account was successfully updated, a confirmation link was sent to your email')
      }
    },
    onError: () => {
      setSeverity('error')
      setMessage('Sorry, account update was unsuccessful')
    }
  })

  const handleSubmit = (event: User) => {
    mutate({
      variables: {
        firstName: event.firstName,
        lastName: event.lastName,
        image: event.imageUrl,
        email: event.email,
        phone: event.phone,
      }
    })
  }

  return (
    <>
      {message && <Banner severity={severity} message={message} />}
      <br />
      <Formik
        enableReinitialize
        onSubmit={handleSubmit}
        initialValues={initial}
        validationSchema={UserUpdateSchema}
      >
        <EditUserForm initialValues={user} />
      </Formik>
    </>
  )
}
