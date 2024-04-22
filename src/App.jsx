import Profile from "./components/task-1/Profile"
import FriendList from "./components/task-2/FriendList"
import userData from "./components/task-1/userData.json"
import friends from "./components/task-2/friends.json"
import "./App.css"

function App() {
  
  return (
    <>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    >

    </Profile>
      <FriendList
      friends = {friends}>

      </FriendList>
      </>
  )
    
}

export default App
