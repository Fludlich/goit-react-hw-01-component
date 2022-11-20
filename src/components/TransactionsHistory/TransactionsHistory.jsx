import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableItem,
  TableList,
} from './TransactionsHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(
          ({
            id = 0,
            type = 'no info',
            amount = 0,
            currency = 'no info',
          }) => {
            return (
              <TableList key={id}>
                <TableItem>{type}</TableItem>
                <TableItem>{amount}</TableItem>
                <TableItem>{currency}</TableItem>
              </TableList>
            );
          }
        )}
      </TableBody>
    </Table>
  );
};


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
    })
  ),
};

