import * as SC from './Notification.styled'

export const Notification = ({message}) => {
return(
    <>
    <SC.Description>{message}</SC.Description>
    </>
)
}