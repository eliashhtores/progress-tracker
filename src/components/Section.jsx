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
            progress: '20%'
        },
        {
            name: 'T',
            progress: '40%'
        },
        {
            name: 'W',
            progress: '50%'
        },
        {
            name: 'T',
            progress: '60%'
        },
        {
            name: 'F',
            progress: '70%'
        },
        {
            name: 'S',
            progress: '80%'
        },
        {
            name: 'S',
            progress: '100%'
        },
    ]
    return (
        <>
            {days.map((day, key) => (
                <StyledSection key={key}>
                    <WeekdayTitle day={day.name} />
                    <ProgressBar progress={day.progress} />
                </StyledSection>
            ))}
        </>
    )
}

export default Section
