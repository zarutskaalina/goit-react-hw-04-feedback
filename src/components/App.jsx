import React, { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const onLeaveFeedback = evt => {
    const name = evt.target.name;
    console.log(name);

    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        return;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        return;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        return;
      default:
        return;
    }
  };

  const feedbackShowCondition = !good && !neutral && !bad;

  const total = good + neutral + bad;
  const positivePercentage = (100 * good) / total;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onClick={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {feedbackShowCondition ? (
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
