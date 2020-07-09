import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';

function Paginator ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 7 }) {

  const pageCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pageCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  const previousPages = () => {
    setPortionNumber(portionNumber - 1);
  }
  const nextPages = () => {
    setPortionNumber(portionNumber + 1);
  }
  return (
    <div className={styles.pagination}>
      {portionNumber > 1 &&
        <button className={styles.paginatorButton + ' ' + styles.paginatorPrevButton} onClick={previousPages}>PREV</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span className={cn({ [styles.selectedPage]: currentPage === p }, styles.pageNumber)}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}>{p}
            </span>
          )
        })}
      {portionCount > portionNumber &&
        <button className={styles.paginatorButton + ' ' + styles.paginatorNextButton} onClick={nextPages}>NEXT</button>}
    </div>
  )
}

export default Paginator; 
