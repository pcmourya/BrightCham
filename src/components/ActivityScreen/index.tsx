/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import data from '../../data/cardData.json';
import PinkCard from '../../assets/pinkCard.png';
import BlueCard from '../../assets/blueCard.png';
import './index.css';
import Modal from './Modal';

interface CardItem {
  id: string;
  flipedImage: string;
}

interface CardData {
  fruits: CardItem[];
  answers: CardItem[];
}

function ActivityScreen({
  onBackClick,
}: {
  onBackClick: () => void;
}): JSX.Element {
  const [fruitCards, setFruitCards] = useState<CardItem[]>([]);
  const [alphabateCards, setAlphabateFruitCards] = useState<CardItem[]>([]);
  const [pinkFlippedCards, setPinkFlippedFruitCards] = useState<CardItem>({});
  const [blueFlippedCards, setBlueFlippedFruitCards] = useState<CardItem>({});
  const [triesLeftCards, setTriesLeftFruitCards] = useState<number>(6);
  const [correctCards, setCorrectCards] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const { fruits, answers }: CardData = data;
    const fruitsShuffledCards: CardItem[] = fruits.sort(
      () => Math.random() - 0.5,
    );
    const alphabateShuffledCards: CardItem[] = answers.sort(
      () => Math.random() - 0.5,
    );
    setFruitCards(fruitsShuffledCards);
    setAlphabateFruitCards(alphabateShuffledCards);
  }, []);

  //   const handleCardClick = (card) => {};
  const onPinkCardClick = (card: CardItem) => {
    setPinkFlippedFruitCards(card);
    if (blueFlippedCards.id === card.id) {
      setFruitCards(() => fruitCards.filter((c) => c.id !== card.id));
      setAlphabateFruitCards(() =>
        alphabateCards.filter((c) => c.id !== card.id),
      );
      setCorrectCards((prev) => prev + 1);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onBlueCardClick = (card: CardItem) => {
    setBlueFlippedFruitCards(card);
    setTriesLeftFruitCards((prev) => prev - 1);
    if (pinkFlippedCards.id === card.id) {
      setFruitCards(() => fruitCards.filter((c) => c.id !== card.id));
      setAlphabateFruitCards(() =>
        alphabateCards.filter((c) => c.id !== card.id),
      );
      setCorrectCards((prev) => prev + 1);
      setIsModalOpen(true);
    }
  };
  return (
    <>
      {isModalOpen && (
        <Modal
          fruitsImg={pinkFlippedCards.flipedImage}
          alphabateImg={blueFlippedCards.flipedImage}
          closeModal={closeModal}
        />
      )}
      <div className="some">
        <button className="back-button" onClick={() => onBackClick()} />
        <div className="cards-container">
          <div className="cards">
            {fruitCards &&
              fruitCards.map((item) => (
                <div onClick={() => onPinkCardClick(item)}>
                  <CardFlip
                    item={item}
                    isPink={true}
                    pinkCard={pinkFlippedCards.id}
                    blueCard=""
                  />
                </div>
              ))}
          </div>
          <div className="cards">
            {alphabateCards &&
              alphabateCards.map((item) => (
                <div onClick={() => onBlueCardClick(item)}>
                  <CardFlip
                    item={item}
                    isPink={false}
                    pinkCard=""
                    blueCard={blueFlippedCards.id}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

const CardFlip = ({
  item,
  isPink,
  pinkCard,
  blueCard,
}: {
  item: CardItem;
  isPink: boolean;
  pinkCard: string;
  blueCard: string;
}) => {
  const [flip, setFlip] = useState<boolean>(false);

  return (
    <ReactCardFlip
      flipDirection="horizontal"
      key={item.id}
      isFlipped={flip && (item.id === blueCard || item.id === pinkCard)}
    >
      <div className="card" onClick={() => setFlip(true)}>
        <img
          src={isPink ? PinkCard : BlueCard}
          alt="Pink Card"
          className="card-img"
        />
      </div>
      <div className="card card-back" onClick={() => setFlip(false)}>
        <img src={item.flipedImage} alt={item.id} className="card-img" />
      </div>
    </ReactCardFlip>
  );
};
export default ActivityScreen;
