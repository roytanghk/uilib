import styles from "./Loading.module.scss";

export function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loadingContainer}>
        <span className={styles.loading}>Loading</span>
      </div>
    </div>
  );
}
