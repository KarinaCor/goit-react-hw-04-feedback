import * as SC from './Section.styled'

export const Section = ({title,children}) => {
        return(
            <>
        <SC.Title>{title}</SC.Title>
        {children}
        </>
        )
  
    
}