import React from 'react';
import './index.css';
import { AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion';
import { CardItem } from '.';
import outputImage from '../../assets/outputScreen.png';

const bounce = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      bounce: 0.4,
    },
  },
};

function Modal({
  closeModal,
  fruitsImg,
  alphabateImg,
}: {
  id: string;
  closeModal: () => void;
  fruitsImg: CardItem;
  alphabateImg: CardItem;
}) {
  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ): void => {
    const target = event.target as HTMLDivElement;
    if (target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <motion.p
          variants={bounce}
          initial={'initial'}
          animate={'animate'}
          transition={{
            delay: 0.5,
          }}
          className={'match-text'}
        >
          It’s a match !
        </motion.p>
        <motion.img
          style={{rotate: -9}}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
          layoutId={`pink-${fruitsImg.id}`}
          src={fruitsImg.flipedImage}
          alt="fruits"
          className="card-img first"
        />
        <motion.img
          style={{rotate: 9}}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
          layoutId={`blue-${alphabateImg.id}`}
          src={alphabateImg.flipedImage}
          alt="alphabate"
          className="card-img"
        />
      </div>
    </div>
  );
}

export default Modal;
