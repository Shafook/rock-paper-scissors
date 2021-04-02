import styled from 'styled-components';
import breakpoints from '../../utils/breakpoints';

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  @media screen and ${breakpoints.breakpointsUp.medium} {
    text-align: unset;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px 30px;
  color: white;
  font-family: 'Barlow Semi Condensed';
  font-weight: 600;
  letter-spacing: 0.25rem;

  @media screen and ${breakpoints.breakpointsUp.medium} {
    float: right;
  }
`;
