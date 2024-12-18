function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✅"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

function PackingList() {
    return (
        <section>
            <h1>Список речей для пакування Саллі Райд(Sally Ride)</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Космічний костюм"
                />
                <Item
                    isPacked={true}
                    name="Шолом із золотим листям"
                />
                <Item
                    isPacked={false}
                    name="Фото Тем О'Шонессі(Tam O'Shaughnessy)"
                />
            </ul>
        </section>
    );
}

export default PackingList;