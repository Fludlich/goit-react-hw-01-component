// import PropTypes from 'prop-types';
// import {
//   Table,
//   TableHead,
//   TableBody,
//   TableItem,
//   TableList,
// } from './TransactionsHistory.styled';

// export const Transactions = ({ item }) => {
//   return (
//     <Table>
//       <TableHead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </TableHead>

//       <TableBody>
//         {item.map(
//           ({
//             id = 0,
//             type = 'no info',
//             amount = 0,
//             currency = 'no info',
//           }) => {
//             return (
//               <TableList key={id}>
//                 <TableItem>{type}</TableItem>
//                 <TableItem>{amount}</TableItem>
//                 <TableItem>{currency}</TableItem>
//               </TableList>
//             );
//           }
//         )}
//       </TableBody>
//     </Table>
//   );
// };

// Transactions.propTypes = {
//   item: PropTypes.arrayOf(
//     PropTypes.shape({
      
//             type: PropTypes.string.isRequired,
//             amounth: PropTypes.number.isRequired,
//             id: PropTypes.number.isRequired,
//             curency: PropTypes.string.isRequired,
//     })
//   ),
// };


import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';



export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};
  

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};