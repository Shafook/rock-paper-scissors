import { createGlobalStyle } from 'styled-components';
import breakpoints from '../utils/breakpoints';

export const GlobalStyles = createGlobalStyle`

  html{
      font-size: 100%;
      box-sizing: border-box;
  }

  *,*::before,*::after{
      box-sizing:inherit;
  }

  body {
    padding:0;
    margin:0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Barlow Semi Condensed';
    font-weight: 600;
    letter-spacing: 0.25rem;
    line-height: 1;
    color:white;
  }

  .container{
    max-width: 90rem;
    margin: 0 auto;
    padding: 30px;
  }

  .hide-for-mobile{
    @media screen and ${breakpoints.breakpointsDown.small} {
      display:none;
    }
  }

  .hide-for-desktop{
    @media screen and ${breakpoints.breakpointsUp.medium} {
      display:none;
    }
  }
`;
