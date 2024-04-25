import Profile from "./task-1/Profile"
import FriendList from "./task-2/FriendList"
import TransactionHistory from "./task-3/TransactionHistory"
import userData from "./task-1/userData.json"
import friends from "./task-2/friends.json"
import transactions from "./task-3/transactions.json"


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
