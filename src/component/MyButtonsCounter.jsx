import { useState } from 'react';

function MyButtonsCounter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Лічильники, які оновлюються разом</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Натиснуто {count} разів
        </button>
    );
}


export default MyButtonsCounter;