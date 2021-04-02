import React from 'react';
import rulesImage from '../../assets/images/image-rules-bonus.svg';
import iconClose from '../../assets/images/icon-close.svg';
import { Container, Wrapper } from './styles';
interface RulesModalProps {
  className?: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RulesModal: React.FC<RulesModalProps> = ({ className, setModalOpen }) => {
  return (
    <Wrapper>
      <Container>
        <div>
          <span>RULES</span>
          <img
            className='hide-for-mobile closeBtn'
            src={iconClose}
            alt='close icon'
            onClick={() => setModalOpen(false)}
          />
        </div>
        <img src={rulesImage} alt='rules' />
        <img
          className='hide-for-desktop closeBtn'
          src={iconClose}
          alt='close icon'
          onClick={() => setModalOpen(false)}
        />
      </Container>
    </Wrapper>
  );
};
export default RulesModal;
