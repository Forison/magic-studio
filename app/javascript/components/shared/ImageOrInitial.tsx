import { Avatar } from '@mui/material'
import { SxProps } from '@mui/material'

interface Props {
  firstName: string
  imageUrl: string
  sx?: SxProps
}

const ImageOrInitial = ({ firstName, imageUrl, ...sx }: Props): JSX.Element => {
  //@ts-ignore
  if (imageUrl) return <Avatar alt="user_avatar" src={imageUrl} {...sx} />
  return (
    // @ts-ignore
    <Avatar
      {...sx}
      alt="user_initials"
    >
      {firstName[0].toUpperCase()}
    </Avatar>
  )
}

export default ImageOrInitial