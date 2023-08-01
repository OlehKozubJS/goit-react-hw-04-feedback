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

  const changeStatistics = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
    }
    if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
    if (option === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const setTotal = () => {
    return good + neutral + bad;
  };

  const setPositivePercentage = () => {
    return Math.floor((good / setTotal()) * 100);
  };

  return (
    <div className={FeedbackStyles.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={changeStatistics}
        />
      </Section>

      <Section title="Statistics">
        {setTotal() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={setTotal()}
            positivePercentage={setPositivePercentage()}
          />
        )}
      </Section>
    </div>
  );
};
