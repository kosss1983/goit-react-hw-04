import Modal from 'react-modal';
import s from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ onCloseModal, modal, url }) => {
  return (
    <div>
      <Modal
        isOpen={modal}
        onRequestClose={onCloseModal}
        className={s.modal}
        overlayClassName={s.modalOverlay}
      >
        <img src={url}></img>
      </Modal>
    </div>
  );
};

export default ImageModal;
