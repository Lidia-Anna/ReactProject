
const people = [{
    id: 0,
    name: 'Кетрін Джонсон (Creola Katherine Johnson)',
    profession: 'математик',
    accomplishment: 'розрахунки для космічних польотів',
    imageId: 'MK3eW3A'
}, {
    id: 1,
    name: 'Маріо Моліна (Mario José Molina-Pasquel Henríquez)',
    profession: 'хімік',
    accomplishment: 'відкриття озонової діри в Арктиці',
    imageId: 'mynHUSa'
}, {
    id: 2,
    name: 'Абдус Салам (Moшинкаmad Abdus Salam)',
    profession: 'фізик',
    accomplishment: 'теорія електромагнетизму',
    imageId: 'bE7W1ji'
}, {
    id: 3,
    name: 'Персі Джуліан (Percy Lavon Julian)',
    profession: 'хімік',
    accomplishment: 'новаторські кортизоновмісні препарати, стероїди та протизаплідні таблетки',
    imageId: 'IOjWm71'
}, {
    id: 4,
    name: 'Субрахманьян Чандрасекар (Subrahmanyan Chandrasekhar)',
    profession: 'астрофізик',
    accomplishment: 'розрахунок мас зір категорії "білий карлик"',
    imageId: 'lrWQx8l'
}];
function getImageUrl(person) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    );
}

function RenderList() {
    const listItems = people.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ', '}
                чиєю працею є {person.accomplishment}
            </p>
        </li>
    );
    return (
        <article>
            <h1>Вчені</h1>
            <ul>{listItems}</ul>
        </article>
    );
}


export default RenderList;