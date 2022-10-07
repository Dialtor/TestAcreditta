import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAxiosGet } from '../../hooks';
import styles from './styles/FilterMars.module.css';

const FilterMars = ({ setSearchInput, setDateInput, setCurrentRover,currentRover, setCurrentRange, currentRange }) => {
	
	const [maxRange, setMaxRange] = useState(0);

	const [response, error, loading] = useAxiosGet(`https://api.nasa.gov/mars-photos/api/v1/rovers/?&api_key=syf4L9a9xiL3YQx0snEdMrRMDP8e2oGiCZoH7a2f`);


	useEffect(() => {
		let range = response.rovers && response.rovers.filter(item => item.name === currentRover)
		console.log("current Object", range)
	}, [])
	

  const handleChange = (e) => {
    setCurrentRover(e.target.value);
		response.rovers && response.rovers.forEach(element => {
				if (e.target.value === element.name) {
						setMaxRange(element.max_sol)
				}
		});
  }


	console.log('max sol', maxRange )
	console.log(" Selected!!", currentRover);

	return (
		<div className={styles.filtermars}>
			<div className={`${styles.form__group} ${styles.field}`}>
				<input type="text" className={styles.form__field} placeholder={"Search Rover or Camera"} name="Search Rover or Camera" id='name' onChange={(e) => setSearchInput(e.target.value)} />
				<label htmlFor="name" className={styles.form__label}>Search Camera</label>
			</div>

			<input type="date" name="" onChange={(e) => setDateInput(e.target.value)} />

			<div className={styles.content_selec}>
				<select name="" id="" value={currentRover} onChange={(e) => handleChange(e)}>
					{
						response.rovers && response.rovers.map(rover => (
							<option key={rover.id} value={rover.name}>{rover.name}</option>
						))
					}
				</select>
				<i></i>
			</div>

			<label htmlFor="" className={styles.label_sol}>Sol: {currentRange}</label>
			<input type="range" min={0} max={maxRange} onChange={(e) => setCurrentRange(e.target.value) } />
			

		</div >
	)
};

export default FilterMars;
