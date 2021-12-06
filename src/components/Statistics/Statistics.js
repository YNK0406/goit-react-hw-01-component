import React from "react";
import StatisticsItem from './StatisticsItem'
import PropTypes from "prop-types";
import s from './Statistics.module.scss';

const Statistics = ({ title, stats }) => {
    return (
      <div className={s.Statistics}>
        {title && <h2 className={s.Title}>{title}</h2>}
  
        <ul className={s.List}>
          {stats.map(stat => (
            <StatisticsItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
              background={stat.background}
            />
          ))}
        </ul>
      </div>
    )
  };


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,}),
    ),
};   

export default Statistics;