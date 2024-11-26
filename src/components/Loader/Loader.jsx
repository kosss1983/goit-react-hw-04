import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <ThreeDots height="150" width="150" color="red" wrapperClass={s.loader} />
  );
};

export default Loader;
