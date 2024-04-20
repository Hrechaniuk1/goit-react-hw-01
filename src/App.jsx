import Profile from "./components/task-1/Profile"
import userData from "./components/task-1/userData.json"
import "./App.css"

function App() {

  return (
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    >

    </Profile>
  )
    
}

export default App
