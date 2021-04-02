import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 670px;
  height: 140px;
  padding: 20px;
  border: 1px solid hsl(217, 16%, 45%);
  border-radius: 15px;

  > img {
    height: 100%;
  }
`;

export const Score = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  display: flex;

  .score {
    color: hsl(229, 64%, 46%);
  }

  .scoreCount {
    color: hsl(229, 25%, 31%);
    font-size: 55px;
    font-weight: 700;
  }
`;
