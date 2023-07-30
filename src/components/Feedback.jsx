import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import FeedbackStyles from './FeedbackCSS/Feedback.module.css';
import { useState, useEffect } from 'react';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const changeStatistics = option => {
    if (option === 'good') {
      setGood(good + 1);
    }
    if (option === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (option === 'bad') {
      setBad(bad + 1);
    }
  };

  useEffect(() => setTotal(good + neutral + bad), [good, neutral, bad, total]);

  useEffect(
    () => setPositivePercentage(Math.floor((good / total) * 100)),
    [good, neutral, bad, total, positivePercentage]
  );

  return (
    <div className={FeedbackStyles.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={changeStatistics}
        />
      </Section>

      <Section title="Statistics">
        {good + neutral + bad === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};
