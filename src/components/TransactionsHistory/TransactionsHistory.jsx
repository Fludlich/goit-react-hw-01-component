import PropTypes from 'prop-types'
import {
  Table,
  TableHead,
  TableBody,
  TableItem,
  TableList,
} from './TransactionsHistory.styled';

export const Transactions = ({ items }) => {
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
            id = '0',
            type = 'no info',
            amount = 'no info',
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

Transactions.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  type: PropTypes.string,
  amount: PropTypes.number,
  id: PropTypes.number,
  curency: PropTypes.string,
};
