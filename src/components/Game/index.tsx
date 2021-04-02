import React, { useEffect, useState } from 'react';
import rpslzRules from '../../data/rpslzRules';
import {
  Container,
  Piece,
  ChoicePiece,
  Wrapper,
  Choosing,
  Picked,
} from './styles';

type rulesKey = keyof typeof rpslzRules;

const rpslzData: rulesKey[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

interface GameProps {
  className?: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

interface ResultNode {
  text: string;
  color: string;
}

const Game: React.FC<GameProps> = ({ className = '', setScore }) => {
  const [yourChoice, setYourChoice] = useState<rulesKey | null>(null);
  const [botChoice, setBotChoice] = useState<rulesKey | null>(null);
  const [result, setResult] = useState<ResultNode>({ text: '', color: '' });

  useEffect(() => {
    if (yourChoice === null) return;

    let timer1 = setTimeout(() => handleChoice(yourChoice as rulesKey), 1000);

    return () => clearTimeout(timer1);
  }, [yourChoice]);

  const playAgain = () => {
    setYourChoice(null);
    setBotChoice(null);
    setResult({ text: '', color: '' });
  };

  const handleChoice = (choice: rulesKey): void => {
    const botChoice: rulesKey = numberToChoice(randToRpslzInt());

    const yourScore = rpslzRules[choice][botChoice];
    const botScore = rpslzRules[botChoice][choice];

    setBotChoice(botChoice);

    finalMessage([yourScore, botScore]);
  };

  const numberToChoice = (number: number): rulesKey => {
    return rpslzData[number];
  };

  const randToRpslzInt = (): number => {
    return Math.floor(Math.random() * rpslzData.length);
  };

  const finalMessage = ([yourScore, botScore]: [number, number]): void => {
    switch (yourScore) {
      case 0:
        setResult({ text: 'YOU TIED', color: 'yellow' });
        break;
      case 1:
        setResult({ text: 'YOU WON', color: 'green' });
        setScore((prev) => prev + 1);
        break;

      case 2:
        setResult({ text: 'YOU LOST', color: 'red' });
        setScore((prev) => prev - 1);
        break;
      default:
        setResult({ text: 'ERROR', color: 'white' });
        break;
    }
  };

  return (
    <Wrapper className={`${className}`}>
      {!yourChoice && (
        <Container>
          {rpslzData.map((item, index) => {
            return (
              <Piece
                key={index}
                className={`pieces ${item}`}
                onClick={() => setYourChoice(item as rulesKey)}
              >
                <div className='image'></div>
              </Piece>
            );
          })}
        </Container>
      )}

      {yourChoice && (
        <Picked>
          <span className='youPicked'>YOU PICKED</span>
          <span className='botPicked'>THE HOUSE PICKED</span>
          <div className='yourChoice'>
            <ChoicePiece className={`pieces ${yourChoice}`}>
              <div className='image'></div>
            </ChoicePiece>
          </div>
          {botChoice && (
            <div className='result'>
              <div style={{ color: result?.color }}>{result?.text}</div>
              <button onClick={playAgain}>PLAY AGAIN</button>
            </div>
          )}
          <div className='botChoice'>
            {botChoice ? (
              <ChoicePiece className={`pieces ${botChoice}`}>
                <div className='image'></div>
              </ChoicePiece>
            ) : (
              <Choosing />
            )}
          </div>
        </Picked>
      )}
    </Wrapper>
  );
};

export default Game;
