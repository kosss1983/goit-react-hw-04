import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onClickImage }) => {
  const lastImage = images.length - 1;

  return (
    <ul className={s.gallery}>
      {images.map(({ id, urls, alt_description }, i) => (
        <li className={s.galleryItem} key={id}>
          <ImageCard
            last={lastImage === i}
            onClickImage={onClickImage}
            urls={urls}
            description={alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
