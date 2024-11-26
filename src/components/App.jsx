import './App.css';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import ImageModal from './ImageModal/ImageModal';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import { useEffect, useState } from 'react';
import { fetchImages } from '../images-api';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [modal, setModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const handleSearch = query => {
    if (query.trim() === '') {
      return toast.error('The search field must not be empty!');
    }
    setImages([]);
    setTotalPages(0);
    setPage(1);
    setQuery(query.trim());
  };

  const handleOpenModal = url => {
    setModalUrl(url);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data, status } = await fetchImages(query, page);

        if (status !== 200) {
          throw status;
        }

        const { results, total_pages } = data;
        setTotalPages(total_pages);
        setImages(prev => [...prev, ...results]);
      } catch (e) {
        console.error('FETCH REQUEST FAILED: ', e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (query.trim() !== '') {
      getData();
    }
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery onClickImage={handleOpenModal} images={images} />
      <ImageModal
        onCloseModal={handleCloseModal}
        modal={modal}
        url={modalUrl}
      />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <Toaster />
      {totalPages > page && !loading && <LoadMoreBtn setPage={setPage} />}
    </>
  );
}

export default App;
