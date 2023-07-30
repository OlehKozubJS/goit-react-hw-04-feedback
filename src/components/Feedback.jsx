import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import FeedbackStyles from './FeedbackCSS/Feedback.module.css';
import { useState } from 'react';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  changeStatistics = option => {
    if (option === good) {
      setGood();
    }
  };

  countTotalFeedback = () => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.countTotalFeedback();
    return Math.floor((good / sum) * 100);
  };

  return (
    <div className={FeedbackStyles.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.changeStatistics}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
