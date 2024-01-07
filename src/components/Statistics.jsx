import { ConrainerStatistics } from './Styles';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  title,
}) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ConrainerStatistics>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Percentage: {Math.round(positivePercentage)}%</p>
      </ConrainerStatistics>
    </div>
  );
};
