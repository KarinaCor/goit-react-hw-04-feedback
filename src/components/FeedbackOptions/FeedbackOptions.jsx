import * as SC from './FeedbackOptions.styled'

export const FeedbackOptions = ({title, onLeaveFeedback, options}) => {

return(
    <>
    <SC.Wrapper>
    {options.map(option => (
        <SC.Button  key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}>
         {option}
        </SC.Button>
    ))}
</SC.Wrapper>
</>
)


}