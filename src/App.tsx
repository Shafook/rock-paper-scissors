import React, { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import Header from './components/Header';
import Game from './components/Game';
import Rules from './components/Rules';
import RulesModal from './components/RulesModal';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Barlow Semi Condensed:600,700'],
      },
    });
  });

  return (
    <>
      <GlobalStyles />
      {modalOpen && <RulesModal setModalOpen={setModalOpen} />}
      <main
        className='container'
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Header score={score} />
        <Game setScore={setScore} />
        <Rules setModalOpen={setModalOpen} />
      </main>
    </>
  );
};

export default App;
