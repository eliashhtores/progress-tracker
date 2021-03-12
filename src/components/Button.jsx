import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${({ primary }) => (primary ? 'lightslategrey' : 'maroon')};
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;

    &:hover {
        background-color: grey;
    }

    .subtext {
        font-size: 10px;
    }
`

const Button = ({ text, primary }) => {
    return (
        <StyledButton primary={primary}>
            {text}
            <p className="subtext">Sub text</p>
        </StyledButton>
    )
}

export default Button
