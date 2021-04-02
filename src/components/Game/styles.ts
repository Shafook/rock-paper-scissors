import styled from 'styled-components';
import breakpoint from '../../utils/breakpoints';
import pantagon from '../../assets/images/bg-pentagon.svg';
import lizard from '../../assets/images/icon-lizard.svg';
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import spock from '../../assets/images/icon-spock.svg';

export const Wrapper = styled.section`
  margin-bottom: 100px;

  .image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: white;
    border-radius: 50%;
    box-shadow: inset 0px 16px 5px -10px rgba(0, 0, 0, 0.3);
  }

  .scissors {
    top: -40%;
    left: 50%;
    background: linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
    box-shadow: hsl(40, 84%, 40%) 0px 5px 0px;

    .image {
      background-image: url(${scissors});
    }
  }

  .lizard {
    top: 59%;
    left: 18%;
    background: linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
    box-shadow: hsl(261, 73%, 55%) 0px 5px 0px;

    .image {
      background-image: url(${lizard});
    }
  }

  .spock {
    top: 0%;
    left: -4%;
    background: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
    box-shadow: hsl(189, 59%, 40%) 0px 5px 0px;

    .image {
      background-image: url(${spock});
    }
  }

  .rock {
    top: 59%;
    left: 81%;
    background: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
    box-shadow: hsl(349, 71%, 50%) 0px 5px 0px;

    .image {
      background-image: url(${rock});
    }
  }

  .paper {
    top: 0%;
    left: 102%;
    background: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
    box-shadow: hsl(230, 89%, 55%) 0px 5px 0px;

    .image {
      background-image: url(${paper});
    }
  }
`;

export const Container = styled.div`
  position: relative;
  background-image: url(${pantagon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 100vw;
  max-width: 220px;
  height: 230px;

  @media screen and ${breakpoint.breakpointsUp.medium} {
    background-size: cover;

    width: 300px;
    max-width: unset;
    height: 300px;
  }
`;

export const Piece = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);

  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  padding: 15px;

  @media screen and ${breakpoint.breakpointsUp.medium} {
    width: 120px;
    height: 120px;
  }
`;

export const Picked = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 4fr;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  text-align: center;

  > .yourChoice {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  > .botChoice {
    grid-row: 1/2;
    grid-column: 2/3;
  }

  > .result {
    grid-row: 3/4;
    grid-column: 1/3;
  }

  @media screen and ${breakpoint.breakpointsUp.medium} {
    grid-template-rows: 1fr 4fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    > .botPicked {
      grid-row: 1/2;
      grid-column: 3/4;
    }
    > .yourChoice {
      grid-row: 2/3;
      grid-column: 1/2;
    }

    > .botChoice {
      grid-row: 2/3;
      grid-column: 3/4;
    }

    > .result {
      grid-row: 2/3;
      grid-column: 2/3;
    }
  }

  > div {
    text-align: center;
    font-size: 18px;
  }

  .result {
    text-align: center;
    div {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    button {
      cursor: pointer;
      background-color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 30px;
      color: hsl(229, 64%, 46%);
      font-family: 'Barlow Semi Condensed';
      font-weight: 700;
      letter-spacing: 0.1rem;
    }
  }
`;

export const ChoicePiece = styled.div`
  width: 135px;
  height: 135px;
  border-radius: 50%;
  padding: 15px;
  background-color: white;

  @media screen and ${breakpoint.breakpointsUp.medium} {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding: 25px;
  }
`;

export const Choosing = styled.div`
  width: 135px;
  height: 135px;
  border-radius: 50%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.1);

  @media screen and ${breakpoint.breakpointsUp.medium} {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding: 25px;
  }
`;
