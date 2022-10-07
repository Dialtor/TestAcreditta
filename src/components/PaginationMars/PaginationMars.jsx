import React from 'react';
import styles from './styles/PaginationMars.module.css';
import {useDispatch, useSelector} from 'react-redux'
import { ChangeCurrentPage } from '../../features/mars/marsSlice';

const PaginationMars = ({currentPage}) => {

	const dispatch = useDispatch();


 
	const changePage = (page, value) => {
		dispatch(ChangeCurrentPage(page,value))
	}


	return (
		<div className={styles.pagination_container}>
			<span onClick={() => { currentPage > 1 ? changePage(currentPage, -1) : null }}>{"<"} </span>
			{currentPage === 1 ? null : <span onClick={() => changePage(currentPage, -1) }>{"1"}</span>}
			{currentPage === 1 ? null : <span onClick={() => { currentPage > 1 ? changePage(currentPage, -1) : null }}>{currentPage - 1}</span>}
			<span className={styles.current_span}>{currentPage}</span>
			{currentPage === 35 ? null : <span onClick={() => changePage(currentPage, 1)}>{currentPage + 1}</span>}
			{currentPage === 35 ? null : <span onClick={() => changePage(currentPage, 10)}>{currentPage + 10}</span>}
			{currentPage === 35 ? null : <span onClick={() => changePage(currentPage, 1)}>{">"}</span>}
		</div>
	)
};

export default PaginationMars;
