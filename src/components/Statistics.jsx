import propTypes from 'prop-types';
import StatisticsStyles from './FeedbackCSS/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={StatisticsStyles.statistics}>
      <li className={StatisticsStyles.statisticsItem}>Good: {good}</li>
      <li className={StatisticsStyles.statisticsItem}>Neutral: {neutral}</li>
      <li className={StatisticsStyles.statisticsItem}>Bad: {bad}</li>
      <li className={StatisticsStyles.statisticsItem}>Total: {total}</li>
      <li className={StatisticsStyles.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
