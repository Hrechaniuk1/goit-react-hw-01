// export default function FriendListItem({ avatar, name, isOnline }) {
//     const status = isOnline ? "Online" : "Offline"
//     const classList = ["friend-status"]
//     if (isOnline) {
//         classList.push("On")
//     } else {
//         classList.push("Off")
//     }
//     return (
//         <li className="friend-list-item">
//             <img className="friend-img" src={avatar} alt={name} />
//             <h2 className="friend-name">{name}</h2>
//             <p className={classList.join(" ")}>{status}</p>
//         </li>
//     )
// }

import css from "./FriendList.module.css"

export default function FriendListItem({ avatar, name, isOnline }) {
    const status = isOnline ? "Online" : "Offline"
    const classList = [css.friendStatus, ]
    if (isOnline) {
        classList.push(css.On)
    } else {
        classList.push(css.Off)
    } 
    return (
        <li className={css.friendListItem}>
            <img className={css.friendImg} src={avatar} alt={name} />
            <h2 className={css.friendName}>{name}</h2>
            <p className={classList.join(" ")}>{status}</p>
        </li>
    )
}