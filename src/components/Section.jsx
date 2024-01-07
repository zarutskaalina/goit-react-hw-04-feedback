import { Wrapper } from './Styles';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && <h2>{title}</h2>}
      {children}
    </Wrapper>
  );
};
