import React from 'react'

interface IProps {
    container: IContainer | undefined
    elements: (IElement | undefined)[] | undefined
}

export default function Container({ container, elements }: IProps) {
    return (
        <div>{container?.title}</div>
    )
}
