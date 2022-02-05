interface Props {
    name: string
    description: string
    index: number
}

export default function TodoItem({ name, description, index }: Props) {
    return (
        <>
            <h4>Task {index + 1}</h4>
            <h4>{name}</h4>
            <h6>{description}</h6>
            <hr />
        </>
    )
}
