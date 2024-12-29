import {useState} from "react";

// eslint-disable-next-line react/prop-types
function MySmile({src, alt}) {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                <img src={src} alt={alt} style={{width: 100, height: 100}}/>
            </button>
            <div data-count={count}>Clicked {count} times</div>
        </>
    );
}

export default MySmile;