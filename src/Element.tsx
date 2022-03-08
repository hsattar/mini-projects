import styled from 'styled-components'

interface IProps {
    element: IElement | undefined
}

const ElemContainer = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
`

export default function Element({ element }: IProps) {
    return (
        <ElemContainer>{element?.text}</ElemContainer>
    )
}
