import React from 'react';
import { useAxiosGet } from '../../hooks';
import styles from './styles/BodyHome.module.css';

const BodyHome = () => {
const [response, error, loading] = useAxiosGet('https://api.nasa.gov/planetary/apod?api_key=M45Rh6pSttKQAKxH0vwgSZdpwrBKFyzZf4d2Nu7z')

	return (
		<div className={styles.bodyhome}>
			<div className={styles.img_bodycontainer}>
			<img src={response.url} alt={response.media_type}  />
	
			<p className={styles.info}>{response.explanation}</p>
			<p className={styles.date}>Date {response.date}</p>
			</div>
		</div >
	)
};

export default BodyHome;
