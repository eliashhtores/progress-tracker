import styled, { keyframes } from 'styled-components'
import Button from './Button'
import Icon from './Icon'

// const fadeIn = keyframes`
//     0% {
//         opacity: 0;
//     }
//     100% {
//         opacity: 1;
//     }
// `

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg)
    }
`

const Title = styled.h1`
    color: #aac9f0;
    animation: 2s ${rotate} linear infinite;
`

// const Title = styled.h1`
//     color: #aac9f0;
//     animation: 5s ${fadeIn} ease-in;
// `
const SubTitle = styled(Title)`
    font-size: 12px;
`

const ReversedTitle = (props) => (
    <ParagraphTitle {...props} children={props.children.split('').reverse()} />
)

const ParagraphTitle = styled(SubTitle)`
    color: white;
`

const Section = styled.div`
    background-color: #939bc4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #274cf2;
    border-radius: 15px;
`

const Content = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <Section>
                <Title>😎 Section</Title>
                <SubTitle>I am a subtitle</SubTitle>
                <Button text="Me first" primary />
                <Button text="Me second" />
                <Icon statusColor={'go'} border="solid 3px black" status={'done'}></Icon>
                <Icon status={'in-progress'} />
                <ParagraphTitle as={ReversedTitle}>I'm a paragraph</ParagraphTitle>
            </Section>
        </>
    )
}

export default Content
