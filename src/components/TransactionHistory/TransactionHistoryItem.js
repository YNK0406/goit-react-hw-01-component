import PropTypes from "prop-types";
import s from './TransactionHistory.module.scss';


const TransactionHistoryItem = ({type, amount, currency}) => {
   return (
      <tr className={s.TablItem} >
         <td className={s.TablType}>{type}</td>
         <td className={s.TablAmount}>{amount}</td>
         <td className={s.TablCurrency}>{currency}</td>
      </tr>
   )
};
TransactionHistoryItem.propTypes = {
   type: PropTypes.string.isRequired,
   amount: PropTypes.number.isRequired,
   currency: PropTypes.string,
 };




export default TransactionHistoryItem;