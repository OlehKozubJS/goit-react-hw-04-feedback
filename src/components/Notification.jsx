import propTypes from 'prop-types';
import NotificationStyles from './FeedbackCSS/Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={NotificationStyles.notification}>{message}</p>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
