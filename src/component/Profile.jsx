function getImageUrl(person, size) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}
function Avatar({ person, size }) {
    let thumbnailSize = 's';
    if (size > 90) {
        thumbnailSize = 'b';
    }
    return (
        <img
            className="avatar"
            src={getImageUrl(person, thumbnailSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Profile() {
    return (
        <>
            <Avatar
                size={40}
                person={{
                    name: 'Грегоріо І. Зара (Gregorio Y. Zara)',
                    imageId: '7vQD0fP'
                }}
            />
            <Avatar
                size={120}
                person={{
                    name: 'Грегоріо І. Зара (Gregorio Y. Zara)',
                    imageId: '7vQD0fP'
                }}
            />
        </>
    );
}
export default Profile;