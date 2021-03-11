import styled from 'styled-components'
import WeekdayTitle from './WeekdayTitle'

const StyledSection = styled.div`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: left;
    font-size: 40px;
    color: #616eff;
`

const Section = () => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    return (
        <>
            {days.map((day, key) => (
                <StyledSection key={key}>
                    <WeekdayTitle day={day}></WeekdayTitle>
                </StyledSection>
            ))}
        </>
    )
}

export default Section
