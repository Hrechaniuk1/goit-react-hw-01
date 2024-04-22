import Profile from "./components/task-1/Profile"
import FriendList from "./components/task-2/FriendList"
import TransactionHistory from "./components/task-3/TransactionHistory"
import userData from "./components/task-1/userData.json"
import friends from "./components/task-2/friends.json"
import transactions from "./components/task-3/transactions.json"
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
      <TransactionHistory
      data = {transactions}
      >

      </TransactionHistory>
      
      </>
  )
    
}

export default App
