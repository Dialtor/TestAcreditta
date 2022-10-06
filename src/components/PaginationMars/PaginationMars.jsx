import React from 'react';
import styles from './styles/PaginationMars.module.css';

const PaginationMars = ({currentPage, setCurrentPage}) => {


	return (
		<div className={styles.pagination_container}>
			<span onClick={() => { currentPage > 1 ? setCurrentPage(currentPage - 1) : null }}>{"<"} </span>
			{currentPage === 1 ? null : <span onClick={() => { setCurrentPage(1) }}>{"1"}</span>}
			{currentPage === 1 ? null : <span onClick={() => { currentPage > 1 ? setCurrentPage(currentPage - 1) : null }}>{currentPage - 1}</span>}
			<span className={styles.current_span}>{currentPage}</span>
			{currentPage === 35 ? null : <span onClick={() => { setCurrentPage(currentPage + 1) }}>{currentPage + 1}</span>}
			{currentPage === 35 ? null : <span onClick={() => { setCurrentPage(currentPage + 10) }}>{currentPage + 10}</span>}
			{currentPage === 35 ? null : <span onClick={() => { setCurrentPage(currentPage + 1) }}>{">"}</span>}
		</div>
	)
};

export default PaginationMars;
