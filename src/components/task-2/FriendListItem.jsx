export default function FriendListItem({ avatar, name, isOnline }) {
    const status = isOnline ? "Online" : "Offline"
    const classList = ["friend-status"]
    if (isOnline) {
        classList.push("On")
    } else {
        classList.push("Off")
    }
    return (
        <li className="friend-list-item">
            <img className="friend-img" src={avatar} alt={name} />
            <h2 className="friend-name">{name}</h2>
            <p className={classList.join(" ")}>{status}</p>
        </li>
    )
}