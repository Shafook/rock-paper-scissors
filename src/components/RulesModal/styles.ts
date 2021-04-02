import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
`;

export const Container = styled.div`
  background-color: white;
  padding: 30px;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and ${breakpoint.breakpointsUp.medium} {
    border-radius: 5px;
    height: unset;
    width: unset;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: hsl(229, 25%, 31%);
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 10px;

    @media screen and ${breakpoint.breakpointsUp.medium} {
      width: 100%;
    }
  }

  .closeBtn {
    cursor: pointer;
  }
`;
