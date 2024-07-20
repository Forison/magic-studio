export interface Strength {
  label: string
  color: string
}

export interface User {
  lastName: string
  firstName: string
  email: string
  password?: string
  phone: string
  passwordConfirmation?: string
  imageUrl?: string
  verified?: boolean
}
