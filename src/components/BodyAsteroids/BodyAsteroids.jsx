import React from 'react';
import { useState } from 'react';
import { useAxiosGet } from '../../hooks';
import { FilterAsteroids } from '../FilterAsteroids';
import styles from './styles/BodyAsteroids.module.css';

const BodyAsteroids = () => {
	const [startDate, setStartDate] = useState("2015-09-07");
	const [endDate, setEndDate] = useState("2015-09-08");

	const [response, error, loading] = useAxiosGet(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=aDxJVCfpMO3rARGrOdBGOKuvXJ2NlqTXweeYZutP`, startDate, endDate);

	const data = response["near_earth_objects"]
	const DataStartDate = data && data[startDate];
	const DataEndDate = data && data[endDate];
	return (
		<>
			<FilterAsteroids setEndDate={setEndDate} setStartDate={setStartDate} endDate={endDate} startDate={startDate} />
			<div className={styles.bodyasteroids}>
				<div className={styles.flexAsteoird}>
					{
						DataStartDate && DataStartDate.map(item => {

							return (
								<div className={styles.card_item_asteroids}>
									<span>Name: {item.name}</span>
								</div>
							)
						})
					}
				</div >
				<div className={styles.flexAsteoird}>
					{
						DataEndDate && DataEndDate.map(item => {

							return (
								<div className={styles.card_item_asteroids}>
									<span>Name: {item.name}</span>
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
};

export default BodyAsteroids;
