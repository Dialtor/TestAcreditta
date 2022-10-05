import React from 'react';
import styles from './styles/FilterMars.module.css';

const FilterMars = ({ setSearchInput }) => {
	return (
		<div className={styles.filtermars}>
			<div className={`${styles.form__group} ${styles.field}`}>
				<input type="text" className={styles.form__field} placeholder={"Search Rover or Camera"} name="Search Rover or Camera" id='name' onChange={(e) => setSearchInput(e.target.value)} />
				<label htmlFor="name" className={styles.form__label}>Search Rover or Camera</label>
			</div>

			<input type="date" name="" id="" />

		</div >
	)
};

export default FilterMars;
