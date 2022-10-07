import React from 'react';
import { useState } from 'react';
import { useAxiosGet } from '../../hooks';
import { FilterAsteroids } from '../FilterAsteroids';
import { SkeletonCardAsteroid } from '../Skeletons/SkeletonCardAsteroid';
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
					loading && new Array(25).fill().map((item, index) => (
						<SkeletonCardAsteroid key={index} />
					))
				}
					{
						DataStartDate && DataStartDate.map(item => {

							return (
								<div key={item.neo_reference_id} className={styles.card_item_asteroids}>
										<span><strong>Asteroid Name:</strong> {item.name}</span>
									<span><strong>Neo Reference:</strong> {item.neo_reference_id}</span>
									<span><strong>Estimated Diameter {"(km)"}:</strong> {item.estimated_diameter.kilometers.estimated_diameter_max} Km</span>
									<span><strong>Close Approach Data: </strong> {item.close_approach_data[0].close_approach_date_full}</span>
									<span><strong>Orbiting Body</strong> {item.close_approach_data[0].orbiting_body}</span>
									<span><strong>Potencial Danger:</strong> {item.is_potentially_hazardous_asteroid ? <span className={styles.danger_span}>Yes</span> : <span className={styles.sucess_span}>No</span>}</span>
								</div>
							)
						})
					}
				</div >
				<div className={styles.flexAsteoird}>
				{
					loading && new Array(25).fill().map((item, index) => (
						<SkeletonCardAsteroid key={index} />
					))
				}
					{
						DataEndDate && DataEndDate.map(item => {

							return (
								<div key={item.neo_reference_id} className={styles.card_item_asteroids}>
									<span><strong>Asteroid Name:</strong> {item.name}</span>
									<span><strong>Neo Reference:</strong> {item.neo_reference_id}</span>
									<span><strong>Estimated Diameter {"(km)"}:</strong> {item.estimated_diameter.kilometers.estimated_diameter_max} Km</span>
									<span><strong>Close Approach Data: </strong> {item.close_approach_data[0].close_approach_date_full}</span>
									<span><strong>Orbiting Body</strong> {item.close_approach_data[0].orbiting_body}</span>
									<span><strong>Potencial Danger:</strong> {item.is_potentially_hazardous_asteroid ? <span className={styles.danger_span}>Yes</span> : <span className={styles.sucess_span}>No</span>}</span>
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
