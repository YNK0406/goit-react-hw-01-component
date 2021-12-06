import PropTypes from "prop-types";
import s from './TransactionHistory.module.scss'; 
import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = ({items}) =>{
return (
<table class={s.TransactionHistory}>
  <thead className={s.TablHead}>
    <tr className={s.TablHeadItem}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={s.TablBody}> 
       {items.map(item => (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
   </tbody>
</table>
)}

TransactionHistory.propTypes = {
      items: PropTypes.arrayOf(PropTypes.shape({
       id: PropTypes.string.isRequired,}),
   ),
};   
export default TransactionHistory;