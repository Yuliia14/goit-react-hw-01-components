import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/FriendsList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/Transactions/Transactions';
import transactions from './components/Transactions/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        avatarUrl={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={statisticalData} /> */}
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
