import FriendListItem from "./FriendListItem"
import css from "./FriendList.module.css"


export default function FriendList({friends}) {
    return (
        <ul className={css.friendList}>
            {Array.from(friends).map(({avatar, name, isOnline, id } ) =>  <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}
        </ul>
    ) 
}