import React from 'react';
import logo from '../../assets/images/logo-bonus.svg';
import { Score, Wrapper } from './styles';

interface HeaderProps {
  className?: string;
  score: number;
}

const Header: React.FC<HeaderProps> = ({ className, score }) => {
  return (
    <Wrapper className={className}>
      <img src={logo} alt='logo' />
      <Score>
        <span className='score'>SCORE</span>
        <span className='scoreCount'>{score}</span>
      </Score>
    </Wrapper>
  );
};

export default Header;
