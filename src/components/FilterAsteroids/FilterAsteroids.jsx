import React from 'react';
import styles from './styles/FilterAsteroids.module.css';

const FilterAsteroids = ({setStartDate, setEndDate,startDate, endDate}) => {
	return (
		<div className={styles.filterasteroids}>
			<div className={styles.flex_asteroids_data}>
			<span>Start Date</span>
			<input type="date" name="" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
			</div>
			<div className={styles.flex_asteroids_data}>
			<span>End Date</span>
			<input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
			</div>
		</div >
	)
};

export default FilterAsteroids;
