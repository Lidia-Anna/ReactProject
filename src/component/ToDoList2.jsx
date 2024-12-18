const person = {
    name: 'Грегоріо І. Зара (Gregorio Y. Zara)',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function ToDoList2() {
    return (
        <div style={person.theme}>
            <h1>Список завдань {person.name}</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Покращити відеотелефон</li>
                <li>Підготувати лекції з авіаційних технологій</li>
                <li>Працювати над двигуном на спиртовому паливі</li>
            </ul>
        </div>
    );
}
export default ToDoList2;