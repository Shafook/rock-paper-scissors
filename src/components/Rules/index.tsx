import React from 'react';
import { Button, Wrapper } from './styles';

interface RulesProps {
  className?: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Rules: React.FC<RulesProps> = ({ className = '', setModalOpen }) => {
  return (
    <Wrapper className={`${className}`}>
      <Button onClick={() => setModalOpen(true)}>RULES</Button>
    </Wrapper>
  );
};
export default Rules;
