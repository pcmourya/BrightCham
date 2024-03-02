import './index.css';
import welcomeText from '../../assets/toolTip.png';
import startButton from '../../assets/startButton.png';
import nextButton from '../../assets/nextButton.png';
import yesButton from '../../assets/yesButton.png';
import { useState } from 'react';
import InstructionScreen from '../InstructionScreen';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// interface InstructionScreenProps {
//   titleState: string;
//   onBackClick: () => void;
// }

function IntroScreen() {
  const [titleState, setTitleState] = useState('welcome');

  const onNextClick = () => {
    if (titleState === 'welcome') {
      setTitleState('next');
    } else if (titleState === 'next') {
      setTitleState('options');
    } else {
      setTitleState('play');
    }
  };

  const onBackClick = () => {
    if (titleState === 'next') {
      setTitleState('welcome');
    } else if (titleState === 'options') {
      setTitleState('next');
    } else if (titleState === 'play') {
      setTitleState('options');
    } else {
      setTitleState('play');
    }
  };

  const onBackClickInPlay = () => {
    console.log('called');
    setTitleState('options');
  };
  console.log({ titleState });
  return (
    <>
      {titleState === 'play' ? (
        <InstructionScreen
          titleState={titleState}
          onBackClick={onBackClickInPlay}
        />
      ) : (
        <div className="home">
          {!(titleState === 'welcome') && (
            <button className="back-button" onClick={onBackClick} />
          )}

          <div
            className="welcome-tooltip"
            style={{ backgroundImage: `url(${welcomeText})`, height: '220px' }}
          >
            {titleState === 'welcome' ? (
              <p>Welcome Kiddo !</p>
            ) : titleState === 'next' ? (
              <p className="startText">
                Hi , I am Mizo ! <br /> and I love bananas{' '}
              </p>
            ) : (
              <p className="startText">
                Can you help me get <br /> some ?{' '}
              </p>
            )}
          </div>
          <button className="next-button" onClick={onNextClick}>
            <img
              src={
                titleState === 'welcome'
                  ? startButton
                  : titleState === 'next'
                  ? nextButton
                  : yesButton
              }
              className="next-button"
            />
          </button>
        </div>
      )}
    </>
  );
}

export default IntroScreen;
