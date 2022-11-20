import { Profile } from 'components/Profile/Profile'
import { Statistic } from './Statistics/StatisticsSection';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionsHistory/TransactionsHistory';
import transactions from '../transactions.json'
import friends from '../friends.json';
import user from '../user.json';
import data from '../data.json';

export const App = () => {
  return (
    <>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
      <Statistic
      title="UPLOAD STATS" 
      stats={data}/>
      <FriendList
       friends={friends} />
      <TransactionHistory 
      items={transactions}/>
    </>
  );
};

