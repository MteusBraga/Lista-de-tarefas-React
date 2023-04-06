const List = () => {
    const items = [{
        id: 1,
        name: "Mateus"
    }, {
        id: 2,
        name: "Joao"
    }, {
        id: 3,
        name: "Maria"
    }]

    return (
        <div>
            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>
    )

}

export default List