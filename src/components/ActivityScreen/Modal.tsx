import React from 'react';
import './index.css';

function Modal({
  closeModal,
  fruitsImg,
  alphabateImg,
}: {
  closeModal: () => void;
  fruitsImg: string;
  alphabateImg: string;
}) {
  console.log('modal called');
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
        <img src={fruitsImg} alt="fruits" className="card-img" />
        <img src={alphabateImg} alt="alphabate" className="card-img" />
      </div>
    </div>
  );
}

export default Modal;
