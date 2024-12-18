function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

function Toolbar() {
    return (
        <div>
            <AlertButton message="Відтворюється!">
                Відтворити фільм
            </AlertButton>
            <AlertButton message="Завантажується!">
                Завантажити зображення
            </AlertButton>
        </div>
    );
}
export default Toolbar;
