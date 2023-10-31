import * as SC from './Statistics.styled'

export const Statistics = ({title,good,bad,neutral,total,positivePercentage}) => {
        return(
            <>
        <SC.List>
    <SC.Item>Good:{good}</SC.Item>
    <SC.Item>Neurtal:{neutral}</SC.Item>
    <SC.Item>Bad:{bad}</SC.Item>
    <SC.Item>Total:{total}</SC.Item>
    <SC.Item>Positive Feedback:{positivePercentage}</SC.Item>
    </SC.List>
    </>
    )
        }

