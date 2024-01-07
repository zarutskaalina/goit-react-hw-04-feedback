import { ConrainerBtn } from './Styles';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ConrainerBtn>
      {options.map(option => (
        <button type="button" onClick={onClick} key={option} name={option}>
          {option}
        </button>
      ))}
    </ConrainerBtn>
  );
};
