import s from './ImageCard.module.css';
import { useRef, useEffect } from 'react';

const ImageCard = ({
  last,
  onClickImage,
  urls: { small, regular },
  description,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (last) {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [last]);

  return (
    <img
      ref={ref}
      loading="lazy"
      onClick={() => onClickImage(regular)}
      className={s.galleryImage}
      src={small}
      alt={description}
    />
  );
};

export default ImageCard;
