import React from 'react'
import Section from 'components/Section/Section';
import user from 'components/Profile/user.json';
// import data from './components/Statistics/data.json';
// import transactions from'./components/TransactionHistory/transactions.json';
// import friends from './components/FriendList/friends.json';
import Profile from 'components/Profile/Profile';
// import FriendList from './components/FriendList/FriendList';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// import Statistics from './components/Statistics/Statistics';

export default function App() {
  return (
    <>
    <Section>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
    </Section>
    {/* <Section>
      <Statistics title="Upload stats" stats={data} />;
      {/* <Statistics stats={data} /> */}
    {/* </Section>
    <Section>
      <FriendList friends={friends} />
    </Section>
    <Section>
      <TransactionHistory items={transactions} />;
    </Section> */} 
    </>
  )
}
;
