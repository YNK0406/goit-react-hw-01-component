import PropTypes from "prop-types";
import s from './Statistics.module.scss';



const StatisticsItem = ({label, percentage, background}) => {
   return (
      <li className={s.Item} style = {{backgroundColor: `${background}`}} >
         <span className={s.Label}>{label}</span>
         <span className={s.Percentage}>{percentage}%</span>
      </li>
   )
};
StatisticsItem.propTypes = {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired,
   background: PropTypes.string,
 };


export default StatisticsItem;