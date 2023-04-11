import styles from "./style.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.lds_ripple}>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
