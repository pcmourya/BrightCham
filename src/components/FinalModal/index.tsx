import './index.css';
import { motion } from 'framer-motion';
import monkey from '../../assets/monkey.png';
import medal from '../../assets/medal.png';

function FinalModal({ count }: { count: number }) {
  return (
    <div className="final-modal-overlay">
      <div className="final-modal">
        <img src={medal} alt="s" className="medal-img"></img>
        <div className="content-container">
          <p className="medalText">
            <span>Earned</span> <br /> {count} Banana's
          </p>
          <motion.img
            initial={{ rotate: '0deg' }}
            src={monkey}
            alt="monkey"
            className="monkey-img"
          />
          <button className="mainButton"></button>
        </div>
      </div>
    </div>
  );
}

export default FinalModal;
