export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className="friend-list-item">
            <img className="friend-img" src={avatar} alt={name} />
            <h2 className="friend-name">{name}</h2>
            <p className="friend-status">{isOnline}</p>
        </li>
    )
}