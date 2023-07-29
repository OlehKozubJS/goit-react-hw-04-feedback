import propTypes from 'prop-types';
import SectionStyles from './FeedbackCSS/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={SectionStyles.sectionHeader}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
};
