import propTypes from 'prop-types';
import FeedbackOptionsStyles from './FeedbackCSS/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={FeedbackOptionsStyles.feedbackOptions}>
      {options.map((option, index) => (
        <button
          className={FeedbackOptionsStyles.feedbackOptionsButton}
          data-id={option}
          key={index}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.replace(option[0], option[0].toUpperCase())}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
