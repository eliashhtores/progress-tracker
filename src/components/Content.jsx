import styled from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const Title = styled.h1`
    color: #aac9f0;
`
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
