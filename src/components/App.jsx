import { ProfileBox } from 'components/UserSocNet/UserSocNet'
import { StatisticsSection } from 'components/Statistics/StatisticsSection'
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionsHistory/TransactionsHistory';
import transactions from '../transactions.json'
import friends from '../friends.json';
import user from '../user.json';


export const App = () => {
  return (
    <>
      <ProfileBox user={user}/>
      <StatisticsSection />
      <FriendList
       friends={friends} />
      <TransactionHistory 
      items={transactions}/>
    </>
  );
};

