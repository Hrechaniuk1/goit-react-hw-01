import FriendListItem from "./FriendListItem"



export default function FriendList({friends}) {
    return (
        <ul className="friend-list">
            {Array.from(friends).map(({avatar, name, isOnline, id } ) =>  <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}
        </ul>
    )
}