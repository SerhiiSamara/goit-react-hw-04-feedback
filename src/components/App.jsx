import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import 'modern-normalize';

import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, SetGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const options = ['good', 'neutral', 'bad'];

  const coutnFeedback = e => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        SetGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={coutnFeedback}
        />
      </Section>
      {good + neutral + bad > 0 ? (
        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
      <GlobalStyle />
    </>
  );
};
