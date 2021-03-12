import styled from 'styled-components'
import WeekdayTitle from './WeekdayTitle'
import ProgressBar from './ProgressBar'

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
    const days = [
        {
            name: 'M',
            progress: '20%',
            number: 1,
        },
        {
            name: 'T',
            progress: '40%',
            number: 2,
        },
        {
            name: 'W',
            progress: '50%',
            number: 4,
        },
        {
            name: 'T',
            progress: '60%',
            number: 5,
        },
        {
            name: 'F',
            progress: '70%',
            number: 6,
        },
        {
            name: 'S',
            progress: '80%',
            number: 7,
        },
        {
            name: 'S',
            progress: '100%',
            number: 8,
        },
    ]
    return (
        <>
            {days.map((day, key) => (
                <StyledSection key={key}>
                    <WeekdayTitle day={day.name} />
                    <ProgressBar progress={day.progress} number={day.number} />
                </StyledSection>
            ))}
        </>
    )
}

export default Section
