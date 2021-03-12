import styled from 'styled-components'

const StyledWeekdayTitle = styled.div`
    display: flex;
    justify-content: center;
    min-width: 50px;
    border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(StyledWeekdayTitle)`
    background-color: lightgrey;
    color: black;
    border-radius: 7px 0 0 7px;
`

const WeekdayTitle = ({ day }) => {
    return day !== 'S' ? (
        <StyledWeekdayTitle>{day}</StyledWeekdayTitle>
    ) : (
        <WeekendTitle>{day}</WeekendTitle>
    )
}

export default WeekdayTitle
