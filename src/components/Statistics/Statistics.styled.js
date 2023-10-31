import styled from 'styled-components'

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
list-style-type: none;
padding: 0;

`

export const Item = styled.li`
    border-bottom: 1px solid paleturquoise;
    display: flex;
    font-size: 15px;
    gap: 20px;
    justify-content: space-between;
    padding: 10px;
    width: 300px;
`