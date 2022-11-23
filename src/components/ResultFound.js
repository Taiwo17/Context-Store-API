import React from 'react';
import styles from './resultfound.module.css';

function ResultFound() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Result Found</h2>
      </div>
      <div className={styles.sort_container}>
        <p className={styles.paragraph}>Sort By</p>
        <select name='' id='' className={styles.select_container}>
          <option className={styles.option} value='revelance'>
            Relevance
          </option>
          <option className={styles.option} value='date'>
            Date
          </option>
          <option className={styles.option} value='latest'>
            Latest
          </option>
        </select>
      </div>
    </div>
  );
}

export default ResultFound;
