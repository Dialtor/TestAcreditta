import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAxiosGet } from '../../hooks';
import { FilterTle } from '../FilterTle';
import styles from './styles/BodyOrbiting.module.css';

const BodyOrbiting = () => {

	const [idSatelite, setIdSalite] = useState('')
	const [response, error, loading] = useAxiosGet(`https://tle.ivanstanojevic.me/api/tle/${idSatelite}`);



	return (
		<>
			<FilterTle />
			<div className={styles.bodyorbiting}>

			</div >
		</>
	)
};

export default BodyOrbiting;
