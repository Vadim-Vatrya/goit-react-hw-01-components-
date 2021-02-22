
import React from "react";

import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistical/Statistical";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";

import friends from "./json/friends.json";
import statisticalData from "./json/statistical-data.json";
import user from "./json/user.json";
import transactions from "./json/transactions.json";

import Container from "./Components/Container/Container";

function App() {
  return (
    <div>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>

      <Container>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Container>

      <Container>
        <FriendList friends={friends} />
      </Container>

      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}

export default App;