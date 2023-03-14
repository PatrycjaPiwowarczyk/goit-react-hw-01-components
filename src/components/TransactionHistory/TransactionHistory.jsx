import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactionHistory__header}>
          <th className={css.transactionHistory__headerItemType}>Type</th>
          <th className={css.transactionHistory__headerItem}>Amount</th>
          <th className={css.transactionHistory__headerItem}>Currency</th>
        </tr>
      </thead>
      {transactions.map((transaction, index) => (
        <tbody key={transaction.id}>
          <tr className={css['transactionHistory__row' + (index % 2)]}>
            <td className={css.transactionHistory__rowItemType}>
              {transaction.type}
            </td>
            <td className={css.transactionHistory__rowItem}>
              {transaction.amount}
            </td>
            <td className={css.transactionHistory__rowItem}>
              {transaction.currency}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
