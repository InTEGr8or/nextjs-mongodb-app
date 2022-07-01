import clsx from 'clsx';
import styles from './Feature.module.css';

const Feature = ({ children, className }) => {
  return <div className={clsx(styles.feature, className)}>{children}</div>;
};

export default Feature;