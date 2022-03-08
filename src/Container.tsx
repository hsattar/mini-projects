import styled from 'styled-components'
import Element from './Element'

interface IProps {
    container: IContainer | undefined
    elements: (IElement | undefined)[] | undefined
}

const ContainerDiv = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`
const Title = styled.h3`
    padding: 8px;
`

const ElementList = styled.div`
    padding: 8px;
`

export default function Container({ container, elements }: IProps) {
    return (
        <ContainerDiv>
            <Title>{container?.title}</Title>
            <ElementList>
                {elements?.map(elem => <Element key={elem?.id} element={elem} />)}
            </ElementList>
        </ContainerDiv>
    )
}
