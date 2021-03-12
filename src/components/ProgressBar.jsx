import styled from 'styled-components'

const StyleProgressBar = styled.div`
    background-color: ${({ progress }) => {
        const integer = parseInt(progress.slice(0, -1))

        if (integer >= 80) return 'green'
        else if (integer >= 60) return 'yellow'
        else if (integer >= 40) return 'orange'
        else return 'red'
    }};
    height: 50px;
    width: ${({ progress }) => progress || '0%'};
`
const TodayProgressBar = styled(StyleProgressBar)`
    background-color: purple;
`

const ProgressSection = styled.div`
    width: 250px;
`

const ProgressBar = ({ progress, number }) => {
    const dayOfTheWeek = new Date().getDay()
    const isToday = number === dayOfTheWeek

    return (
        <ProgressSection>
            {isToday && <TodayProgressBar progress={progress} />}
            {!isToday && <StyleProgressBar progress={progress} />}
        </ProgressSection>
    )
}

export default ProgressBar
