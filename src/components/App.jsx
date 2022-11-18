import { ProfileBox } from 'components/UserSocNet/UserSocNet'
import { StatisticsSection } from 'components/Statistics/StatisticsSection'
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './TransactionsHistory/TransactionsHistory';
import transactions from '../transactions.json'
 import friends from '../friends.json';

export const App = () => {
  return (
    <>
      <ProfileBox />
      <StatisticsSection />
      <FriendList friends={friends} />
      <Transactions 
      items={transactions}/>
    </>
  );
};
