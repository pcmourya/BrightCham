import './index.css';
import playButton from '../../assets/playButton.png';
import selectPinkCard from '../../assets/selectPinkCard.png';
import selectBlueCard from '../../assets/selectBlueCard.png';
import selectMatchCard from '../../assets/selectMatchCard.png';
import line from '../../assets/line.png';
import { useState } from 'react';
import ActivityScreen from '../ActivityScreen';

function InstructionScreen({
  titleState,
  onBackClick,
}: {
  titleState: string;
  onBackClick: () => void;
}) {
  const [playClicked, setPlayClicked] = useState(false);

  return (
    <>
      {playClicked ? (
        <ActivityScreen onBackClick={onBackClick} />
      ) : (
        <div className="some">
          {!(titleState === 'welcome') && (
            <button className="back-button" onClick={() => onBackClick()} />
          )}
          <div className="main-cards">
            <img src={selectPinkCard} className="select-card" />
            <img src={selectBlueCard} className="select-card" />
            <img src={selectMatchCard} className="select-card" />
          </div>
          <img src={line} className="line" />
          <button className="next-button" onClick={() => setPlayClicked(true)}>
            <img src={playButton} className="next-button" />
          </button>
        </div>
      )}
    </>
  );
}

export default InstructionScreen;
